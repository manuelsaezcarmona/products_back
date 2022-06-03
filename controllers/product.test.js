const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');
const { addProduct, getAllProducts, getProductsByTerm } = require('./product');

dotenv.config();

jest.mock('../models/Product');

describe('Given the Product controller', () => {
  let req;
  let res;
  beforeEach(() => {
    req = { params: {} };
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  afterAll(() => {
    mongoose.disconnect();
  });
  describe('When addProduct is triggered', () => {
    test('then All fields are correct then called to res.json()', async () => {
      req.body = {
        productName: 'jarron',
        description:
          'productos en madera para darle a tu baño un toque en estilo natural',
        imageURL:
          'https://assets.leroymerlin.es/is/image/lmes/15769985-0400/estanteria-2-estantes-lotus-madera-27x70.jpg?$lmesBgMobile$&fit=constrain,0',
        isFavourite: false,
        price: 15.99,
        section: 'baño',
      };

      await addProduct(req, res);
      expect(res.status).toHaveBeenCalled();
    });
    test('then fields no present then throw an response', async () => {
      jest
        .spyOn(Product.prototype, 'save')
        .mockImplementationOnce(() => Promise.reject('fail update'));

      req.body = {};
      await addProduct(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe('When getAllProducts is triggered', () => {
    test('then response with Product data', async () => {
      Product.find = jest.fn().mockReturnThis();

      await getAllProducts(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
    });
    test('error', async () => {
      Product.find.mockRejectedValue('error');
      await getAllProducts(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });

  describe('When getProductsByTerm is triggered', () => {
    test('then response with matches search', async () => {
      req.query = { term: 'algo' };
      Product.find = jest.fn().mockReturnThis();

      await getProductsByTerm(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
    });
    test('then an error is occurred', async () => {
      req.query = { term: 'algo' };
      Product.find.mockRejectedValue('error');
      await getProductsByTerm(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
});
