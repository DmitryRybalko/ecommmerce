const express = require("express");

const router = express.Router();

const { authCheck } = require("../middlewares/auth");

const {
  userCart,
  getUserCart,
  saveAddress,
  emptyCart,
  createOrder,
  orders,
} = require("../controllers/user");

router.post("/user/cart", authCheck, userCart);
router.get("/user/cart", authCheck, getUserCart);
router.get("/user/orders", authCheck, orders);
router.post("/user/address", authCheck, saveAddress);
router.delete("/user/cart", authCheck, emptyCart);

router.post("/user/order", authCheck, createOrder);

module.exports = router;
