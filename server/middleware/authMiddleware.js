import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];


    const decoded = jwt.decode(token);

    const userId = decoded.sub;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    req.user = user;
    req.auth = { userId };
    next();
  } catch (err) {
    console.error("protect error:", err);
    return res.status(401).json({ success: false, message: "Not authenticated" });
  }
};
