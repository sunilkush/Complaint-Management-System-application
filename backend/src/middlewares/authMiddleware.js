import { verifyAccessToken } from '../utils/jwt.js';
import { User } from '../models/User.js';
export const protect = async (req, res, next) => {
  try {
    const auth = req.headers.authorization || '';
    const token = auth.startsWith('Bearer ') ? auth.split(' ')[1] : null;
    if (!token) throw new Error('Unauthorized');
    const decoded = verifyAccessToken(token);
    req.user = await User.findById(decoded.sub).select('-password');
    if (!req.user) throw new Error('Unauthorized');
    next();
  } catch {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};
