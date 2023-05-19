import Articles from "../models/Articles.js";

/* READ */
export const getArticle = async (req, res) => {
  try {
    const article = await Articles.find();
    res.status(200).json(article);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserArticles = async (req, res) => {
  try {
    const { userId } = req.params;
    const article = await Articles.find({ userId });
    res.status(200).json(article);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
