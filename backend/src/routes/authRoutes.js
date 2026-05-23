import { Router } from 'express';
import * as ctrl from '../controllers/authController.js';
import { validate } from '../middlewares/validationMiddleware.js';
import { loginSchema, registerSchema } from '../validators/authValidator.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = Router();
router.post('/register', validate(registerSchema), ctrl.register);
router.post('/login', validate(loginSchema), ctrl.login);
router.post('/forgot-password', ctrl.forgotPassword);
router.post('/reset-password', ctrl.resetPassword);
router.post('/refresh-token', ctrl.refreshToken);
router.get('/profile', protect, ctrl.profile);
export default router;
