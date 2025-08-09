import express from 'express';
import { generatePaymentUrlHandler } from '../controllers/payments.controller.js';

const router = express.Router();

router.post('/', generatePaymentUrlHandler);

export default router;