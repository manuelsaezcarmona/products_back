const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
  productName: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
    index: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  isFavourite: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
  },
});

ProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;

    delete returnedObject._id;
    delete returnedObject._v;
  },
});

module.exports = model('Product', ProductSchema);
