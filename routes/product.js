const productRouter = require('express').Router();

const { addProduct, getAllProducts } = require('../controllers/product');

productRouter.post('/', addProduct);
productRouter.get('/', getAllProducts);

module.exports = productRouter;
