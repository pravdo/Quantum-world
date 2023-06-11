import mongoose from "mongoose";

const articlesSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      // required: true,
      min: 1,
      max: 10,
    },
    title: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    subheader: {
      type: String,
      required: true,
      max: 50,
      // unique: false,
    },
    picturePath: {
      type: String,
      default: "",
    },
    main_info: {
      type: String,
      required: true,
      min: 2,
      max: 300,
    },
    first_summary: {
      type: String,
      required: true,
      min: 2,
      max: 400,
    },
    second_summary: {
      type: String,
      required: false,
      min: 2,
      max: 400,
    },
  },
  { timestamps: true }
);

const Articles = mongoose.model("Articles", articlesSchema);
export default Articles;
