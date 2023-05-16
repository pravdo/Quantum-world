import Articles from "../models/Articles.js";

/* READ */
export const getArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Articles.findById(id);
    res.status(200).json(article);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
