const express = require("express");

const router = express.Router();

const { authCheck } = require("../middlewares/auth");

const { userCart, getUserCart, saveAddress } = require("../controllers/user");

router.post("/user/cart", authCheck, userCart);
router.get("/user/cart", authCheck, getUserCart);
router.post("/user/address", authCheck, saveAddress);

module.exports = router;
