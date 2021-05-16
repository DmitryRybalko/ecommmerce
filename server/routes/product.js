const express = require("express");

const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const { create } = require("../controllers/category");

router.post("/category", authCheck, adminCheck, create);

module.exports = router;
