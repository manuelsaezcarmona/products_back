const Product = require('../models/Product');

const addProduct = async (req, res) => {
  const { productName, description, imageURL, isFavourite, price, section } =
    req.body;

  const product = new Product({
    productName,
    description,
    imageURL,
    isFavourite,
    price,
    section,
  });

  try {
    const newProduct = await product.save();

    return res.status(201).json({
      ok: true,
      msg: 'Product created',
      newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: `Please contact the administrator ${error.message}`,
    });
  }
};

const getAllProducts = async (req, res) => {
  console.log(req.body);

  try {
    const products = await Product.find();

    return res.status(201).json({
      ok: true,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: `Please contact the administrator ${error.message}`,
    });
  }
};

const searchProducts = async (req, res) => {
  const { term } = req.query;

  const reg = new RegExp(term, 'i');

  try {
    const result = await Product.find({
      productName: reg,
    });

    return res.status(201).json({
      ok: true,
      result,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: `Please contact the administrator ${error.message}`,
    });
  }
};

module.exports = { addProduct, getAllProducts, searchProducts };
