const productRouter = require('express').Router();

const { addProduct } = require('../controllers/product');

productRouter.post('/', addProduct);

module.exports = productRouter;
