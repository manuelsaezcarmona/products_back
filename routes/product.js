const productRouter = require('express').Router();

const {
  addProduct,
  getAllProducts,
  getProductsByTerm,
} = require('../controllers/product');

productRouter.post('/', addProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/search', getProductsByTerm);

module.exports = productRouter;
