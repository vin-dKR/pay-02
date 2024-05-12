const express = require("express");
const z = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
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
module.exports = router;
