import express from 'express';
import { validatePaymentHandler } from '../controllers/validate.controller.js';

const router = express.Router();

router.get('/', validatePaymentHandler);

export default router;