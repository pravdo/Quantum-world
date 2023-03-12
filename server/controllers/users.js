import User from "../models/User";
import Products from "../models/Products";

/* Read */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getProductProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const products = await Promise.all(
      user.products.map((id) => Products.findById(id))
    );

    const formattedProducts = products.map(
      ({ _id, brand, productName, price, category, subCategory }) => {
        return { _id, brand, productName, price, category, subCategory };
      }
    );
    res.status(200).json(formattedProducts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* Update */
export const addRemoveItem = async (req, res) => {
  try {
    const { id, productId } = req.params;
    const user = await User.findById(id);
    const product = await Products.findById(productId);

    if (user.products.includes(productId)) {
      user.products = user.products.filter((id) => id !== productId);
      product.users_ = product.users_.filter((id) => id !== id); // to remove user from selected item (if needed)
    } else {
      user.products.push(productId);
      product.users_.push(id); // // to add user to selected item (if needed)
    }

    await user.save();
    await product.save();

    const products = await Promise.all(
      user.products.map((id) => Products.findById(id))
    );

    const formattedProducts = products.map(
      ({ _id, brand, productName, price, category, subCategory }) => {
        return { _id, brand, productName, price, category, subCategory };
      }
    );

    res.status(200).json(formattedProducts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
