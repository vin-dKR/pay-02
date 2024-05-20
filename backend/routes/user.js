const express = require("express");
const z = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../authMiddleware");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();

const signupBody = z.object({
  username: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});

// @route   POST api/auth/
// SIGN-UP ----------------------
router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupBody.safeParse(body);

  if (!success) {
    res.status(400).json({
      msg: "Soory!! credential didn't match",
    });
    return;
  }

  const user = await User.findOne({
    username: body.username,
  });

  if (user) {
    res.status(400).json({
      msg: "User already exists!",
    });
    return;
  }

  const newUser = await User.create(body);
  const userId = newUser._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });

  const token = jwt.sign(
    {
      userId: newUser._id,
    },
    JWT_SECRET
  );
  res.json({
    msg: "User Created!",
    token: token,
  });
});

// SIGN-IN ----------------------
const signinBody = z.object({
  username: z.string().email(),
  password: z.string(),
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);

  if (!success) {
    return res.status(400).json({
      msg: "invalid credintial !!",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
      msg: "signed successfully!!",
    });
    return;
  }
  res.status(411).json({
    message: "Error logging user not exist!!",
  });
});

// USER UPDATE ----------------------
const updateBody = z.object({
  password: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);

  if (!success) {
    res.status(411).json({
      msg: "Err while updating information",
    });
  }

  await User.updateOne(
    { _id: req.userId }, // Filter: find the document by ID
    { $set: req.body } // Update: specify the fields to update and their new values
  );

  res.json({
    msg: "Updated Successfully!!",
  });
});

// SEARCH USER ----------------------
router.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";

  const user = await User.find({
    $or: [
      {
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: user.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
