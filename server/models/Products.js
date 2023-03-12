import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    productName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    price: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    categegory: {
      type: String,
      required: true,
      min: 6,
    },
    subCategory: {
      type: String,
    },
    users_: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("Product", ProductsSchema);
export default Products;
