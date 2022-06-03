const productRouter = require('express').Router();

const {
  addProduct,
  getAllProducts,
  searchProducts,
} = require('../controllers/product');

productRouter.post('/', addProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/search', searchProducts);

module.exports = productRouter;
