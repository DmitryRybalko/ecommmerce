const express = require("express");

const router = express.Router();

const { authCheck, adminCheck } = require("../middlewares/auth");

const {
  create,
  listAll,
  remove,
  read,
  update,
  listRelated,
  list,
  listNoPagination,
  productsCount,
} = require("../controllers/product");

router.post("/product", authCheck, adminCheck, create);
router.get("/products/:count", listAll);
router.delete("/product/:slug", authCheck, adminCheck, remove);
router.get("/product/:slug", read);
router.put("/product/:slug", authCheck, adminCheck, update);
router.post("/products", list);
router.post("/products/list", listNoPagination);
router.get("/products/total", productsCount);
router.get("/product/related/:productId", listRelated);

module.exports = router;
