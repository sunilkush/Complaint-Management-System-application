import { ok } from '../utils/apiResponse.js';
import * as authService from '../services/authService.js';
import { User } from '../models/User.js';

export const register = async (req, res, next) => { try { const user = await authService.register(req.body); ok(res, user, 'Registered', 201);} catch (e) { next(e);} };
export const login = async (req, res, next) => { try { const data = await authService.login(req.body); ok(res, data, 'Logged in'); } catch (e) { next(e);} };
export const refreshToken = async (req, res, next) => { try { ok(res, await authService.refresh(req.body.refreshToken), 'Token refreshed'); } catch (e) { next(e);} };
export const forgotPassword = async (req, res, next) => { try { const user = await authService.setResetToken(req.body.email); ok(res, { token: user?.resetToken }, 'If account exists, reset token generated'); } catch (e) { next(e);} };
export const resetPassword = async (req, res, next) => { try { const user = await User.findOne({ resetToken: req.body.token, resetTokenExpiry: { $gt: new Date() }}); if (!user) throw new Error('Invalid token'); user.password = req.body.password; user.resetToken=null; user.resetTokenExpiry=null; await user.save(); ok(res, null, 'Password reset'); } catch (e) { next(e);} };
export const profile = async (req, res) => ok(res, req.user);
