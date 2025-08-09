# botondepago-yappy-railway
Template para integrar el botón de pago Yappy en Railway con Node.js, Express y Bootstrap


# Template de Integración del Botón de Pago Yappy para Railway

## Descripción breve del proyecto

Este proyecto es un **template listo para Railway** que cualquiera puede clonar y desplegar en minutos. Contiene un formulario HTML5 con Bootstrap en el frontend y un backend en Node.js + Express, diseñado para integrar fácilmente el **Botón de Pago Yappy** de un banco panameño.

El objetivo principal es que el usuario pueda tener un formulario funcional que envíe datos al API de Yappy, reciba la respuesta y pueda adaptar rápidamente esta integración a su propio proyecto. Además, facilita ver el código de cómo funciona la lógica con la generación de la URL de pago y la notificación instantánea de pagos (Instant Payment Notification - IPN).

## Cómo usarlo o integrarlo

1. Clona este repositorio en Railway o en tu entorno local:

```bash
git clone <https://github.com/infodigitalpty/botondepago-yappy-railway.git>
```

2. Configura las variables de entorno necesarias para la integración con Yappy (como claves, tokens o cualquier parámetro que el API de Yappy requiera). Ejemplo en un archivo `.env`:

```
MERCHANT_ID=tu_merchant_id
SECRET_KEY=tu_secret_key
```

3. Ejecuta el proyecto:

```bash
    "start": "node server.js",
    "dev": "nodemon server.js"
```

4. Abre el navegador en la URL que Railway o tu entorno local te indique.

5. Utiliza el formulario para enviar datos al API de Yappy y recibir la respuesta de pago.

6. Adapta el código fácilmente para integrarlo en tu propio proyecto.

## Dependencias o requisitos

- Node.js (versión recomendada >= 16)
- Railway o cualquier entorno para desplegar Node.js + Express
- Variables de entorno configuradas con las credenciales de Yappy
- Navegador moderno para usar el formulario con Bootstrap

## Enlaces importantes

- Documentación oficial del Botón de Pago Yappy:  
  [https://www.yappy.com.pa/comercial/desarrolladores/boton-de-pago-yappy-nueva-integracion/#0f522d900391a87ec](https://www.yappy.com.pa/comercial/desarrolladores/boton-de-pago-yappy-nueva-integracion/#0f522d900391a87ec)

## Contacto o soporte

Para soporte o preguntas relacionadas con la integración de Yappy, consulta la documentación oficial o contacta con el equipo de Yappy a través de sus canales oficiales.

---

*Este template fue creado para facilitar la integración rápida y funcional del Botón de Pago Yappy en proyectos web usando Railway y tecnologías modernas.*
