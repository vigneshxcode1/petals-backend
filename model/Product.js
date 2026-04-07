import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter the name"],
    trim: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  cutprice: {
    type: Number,
    required: true,
    default: 0,
  },
  describe: {
    type: String,
    required: [true, "please enter the description"],
    maxlength: [10000, "description details cannot exceed 10000 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [{ type: String, required: true }],

  size: {
    type: String,
    enum: {
      values: [ "100", "250", "500"],
    },
  },
  category: {
    type: String,
    required: [true, "please enter product category"],
    enum: {
      values: [
        "Shampoo",
        "Soap",
        "Face Serum ",
        "Facewash ",
        "Lipbom"
      ],
      message: "please select correct category",
    },
  },
  seller: {
    type: String,
    required: [true, "please enter product seller name"],
  },
  stock: {
    type: Number,
    required: [true, "please enter product stock"],
  },
  numofreview: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    required: [true, "please enter product color"],
    enum: {
      values: ["black", "white", "green", "beige"],
      message: "please select correct color",
    },
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = mongoose.model("bProduct", productSchema);

export default ProductModel;
