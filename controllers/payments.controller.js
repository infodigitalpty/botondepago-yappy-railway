import config from '../config.js';
import fetch from 'node-fetch';

// Función auxiliar para obtener token del comercio
async function getMerchantToken() {
  const baseUrl = config.env === 'production'
    ? 'https://apipagosbg.bgeneral.cloud'
    : 'https://api-comecom-uat.yappycloud.com';

  const response = await fetch(`${baseUrl}/payments/validate/merchant`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      merchantId: config.merchantID,
      urlDomain: config.domain
    })
  });

  const data = await response.json();
  if (!data.body?.token) throw new Error('No se pudo obtener token de comercio');
  return { token: data.body.token, baseUrl };
}

// Controlador para generar orden y devolver URL de pago
export const generatePaymentUrlHandler = async (req, res) => {
  try {
    const { subtotal, taxes, total, orderId, aliasYappy } = req.body;

    // Paso 1: Obtener token
    const { token, baseUrl } = await getMerchantToken();

    // Paso 2: Crear orden
    const paymentDate = Date.now();
    const response = await fetch(`${baseUrl}/payments/payment-wc`, {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        merchantId: config.merchantID,
        orderId,
        domain: config.domain,
        paymentDate,
        aliasYappy: aliasYappy || '',
        ipnUrl: config.ipnUrl,
        discount: "0.00",
        taxes: taxes.toFixed(2),
        subtotal: subtotal.toFixed(2),
        total: total.toFixed(2)
      })
    });

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error('Error en generar pago:', error);
    res.status(500).json({ error: error.message });
  }
};