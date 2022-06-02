const Product = require('../models/Product');

const addProduct = async (req, res) => {
  const { productName, description, imageURL, isFavourite, section } = req.body;

  const product = new Product({
    productName,
    description,
    imageURL,
    isFavourite,
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
    res.status(500).json({
      ok: false,
      msg: `Please contact the administrator ${error.message}`,
    });
  }
};

module.exports = { addProduct };
