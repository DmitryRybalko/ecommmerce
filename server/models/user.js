const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userScheme = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    zip: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userScheme);
