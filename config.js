import dotenv from 'dotenv';
dotenv.config();

export default {

  // Port configuration
  port: process.env.PORT || 3000,
  // Yappy
  env: process.env.YAPPY_ENV || 'sandbox', // 'production' o 'sandbox'
  merchantID: process.env.MERCHANT_ID,
  secretKey: process.env.SECRET_KEY, // por si se requiere para otros métodos
  successUrl: process.env.SUCCESS_URL,
  failUrl: process.env.FAIL_URL,
  domain: process.env.DOMAIN,
  ipnUrl: process.env.IPN_URL

};