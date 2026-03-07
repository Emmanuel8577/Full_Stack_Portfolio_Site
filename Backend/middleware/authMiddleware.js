import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log("Auth Header Received:", authHeader); // DEBUG LOG

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log("❌ No Bearer token found");
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log("❌ JWT Verification Failed:", err.message); // DEBUG LOG
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;