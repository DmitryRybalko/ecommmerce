const User = require("../models/user");
const Cart = require("../models/cart");
const Product = require("../models/product");
const cart = require("../models/cart");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {
  const user = await User.findOne({ email: req.user.email }).exec();

  const { cartTotal } = await Cart.findOne({ orderedBy: user._id }).exec();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: cartTotal * 100,
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
