import jwt from "jsonwebtoken";

export const verifyToken = async (re, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next(); // proceed to the next step of the function
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
