import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const ADMIN_USER = process.env.ADMIN_USERNAME || 'admin';
  const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'password123';

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ user: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// THIS IS THE CRITICAL LINE
export default router;