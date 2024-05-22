const express = require("express");
const userRouter = require("./user");
const accountRouter = require("./account");
const { authMiddleware } = require("../authMiddleware");
const { Account } = require("../db");

const router = express.Router();

router.use("/users", userRouter);
router.use('/account', accountRouter);

module.exports = router;
