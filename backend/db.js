const mongoose = require("mongoose");
require("dotenv").config();
const dbUrl = process.env.MONGO_URI;

mongoose.connect(dbUrl);

const userSchema = mongoose.Schema({
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

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
