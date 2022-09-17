import { Router } from 'express';

const router = Router;

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/refresh-tokens', authController.refreshTokens);
router.post('/reset-password', authController.resetPassword);

export default router;
