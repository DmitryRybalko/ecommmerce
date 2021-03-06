const Product = require("../models/product");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.title);
    const newProduct = await new Product(req.body).save();
    res.json(newProduct);
  } catch (error) {
    res.status(400).send("Create product failed");
  }
};

exports.listAll = async (req, res) => {
  let products = await Product.find({})
    .limit(parseInt(req.params.count))
    .populate("category")
    .sort([["createdAt", "desc"]])
    .exec();
  res.json(products);
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Product.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Product delete failed");
  }
};

exports.read = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug })
    .populate("category")
    .exec();
  res.json(product);
};

exports.update = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updated = await Product.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.listRelated = async (req, res) => {
  const product = await Product.findById(req.params.productId).exec();

  const related = await Product.find({
    _id: { $ne: product.id },
    category: product.category,
  })
    .limit(4)
    .populate("category")
    .populate("postedBy")
    .exec();

  res.json(related);
};

exports.listNoPagination = async (req, res) => {
  try {
    const { sort, order, limit } = req.body;
    const products = await Product.find({})
      .populate("category")
      .sort([[sort, order]])
      .limit(limit)
      .exec();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

exports.list = async (req, res) => {
  console.table(req.body);
  try {
    const { sort, order, page } = req.body;
    const currentPage = page || 1;
    const perPage = 6;
    const products = await Product.find({})
      .skip((currentPage - 1) * perPage)
      .populate("category")
      .sort([[sort, order]])
      .limit(perPage)
      .exec();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

exports.productsCount = async (req, res) => {
  let total = await Product.find({}).estimatedDocumentCount().exec();
  res.json(total);
};
