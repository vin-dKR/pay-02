const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = process.env.MONGO_URI;

mongoose.connect(dbUrl);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: { 
    type: String, 
    minlength: 8,
    required: true },
  firstName: {
    type: String,
    required: true
},
  lastName: {
    type: String,
    required: true
},
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: 'User',
    required: true
},
  balance: {
    type: Number,
    required: true
}
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
  User,
  Account
};
