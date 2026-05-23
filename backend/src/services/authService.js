import crypto from 'crypto';
import { User } from '../models/User.js';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/jwt.js';

export const register = async (payload) => User.create(payload);
export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) throw new Error('Invalid credentials');
  const accessToken = signAccessToken({ sub: user._id, role: user.role });
  const refreshToken = signRefreshToken({ sub: user._id });
  user.refreshToken = refreshToken; await user.save();
  return { user, accessToken, refreshToken };
};
export const refresh = async (token) => {
  const decoded = verifyRefreshToken(token);
  const user = await User.findById(decoded.sub);
  if (!user || user.refreshToken !== token) throw new Error('Invalid refresh token');
  return { accessToken: signAccessToken({ sub: user._id, role: user.role }) };
};
export const setResetToken = async (email) => {
  const user = await User.findOne({ email });
  if (!user) return null;
  user.resetToken = crypto.randomBytes(20).toString('hex');
  user.resetTokenExpiry = new Date(Date.now() + 3600000);
  await user.save();
  return user;
};
