// Valida el pago usando los parámetros de Yappy enviados al IPN(Instant Payment Notification) o URL de retorno
export const validatePaymentHandler = async (req, res) => {
  try {
    const { orderId, status, confirmationNumber, hash, domain } = req.query;

    console.log("Validando pago recibido:");
    console.log({ orderId, status, confirmationNumber, hash, domain });

    let statusTexto = '';
    if (status === 'E') statusTexto = 'pagado';
    else if (status === 'R') statusTexto = 'rechazado';
    else if (status === 'C') statusTexto = 'cancelado';

    console.log(`Estado final de la orden: ${statusTexto}`);

    // Aquí podrías actualizar la DB si es necesario
    res.sendStatus(200);
  } catch (error) {
    console.error('Error validando pago:', error);
    res.sendStatus(500);
  }
};