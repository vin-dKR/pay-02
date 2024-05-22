const express = require("express");
const { default: mongoose } = require("mongoose");
const { authMiddleware } = require("../authMiddleware");
const { Account } = require("../db");
const router = express.Router();
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

// @Balance route
router.get("/balance", authMiddleware, async (req, res) => {
//   const auth = req.headers.authorization;
//   const token = auth.split(" ")[1];

//   const decoded = jwt.verify(token, JWT_SECRET);

//   if (decoded.userId) {
//     req.userId = decoded.userId;
//   } else {
//     return res.status(403).json({ error: "dsfsdf" });
//   }

  const account = await Account.findOne({
    userId: req.userId,
  });
  res.json({
    balance: account.balance,
  });
});

// @Transfer route
router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  const { amount, to } = req.body;
  const account = await Account.find({ userId: req.userId }).session(session);

  if (!account || !account.balance > amount) {
    await session.abortTransaction();
    return res.json({
      msg: "Insufficient Balance!!",
    });
  }

  const toAccount = await Account.findOne({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.json({
      msg: "Invalid Account??",
    });
  }
  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  await session.commitTransaction();

  res.json({
    msg: "Trans Sucessfull !!",
  });
});

module.exports = router;
