// Importing necessary modules
import express from 'express';
import path from 'path';

import paymentsRouter from './routes/payments.routes.js';
import validateRouter from './routes/validate.routes.js';

// Initializations 
const app = express();
const __dirname = path.resolve();

// Settings 
app.set('port', process.env.PORT || 3000);

// Files Public
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/payments', paymentsRouter);
app.use('/api/validate', validateRouter);

// App listening
app.listen(app.get('port'));
console.log(`App listening on port ${app.get('port')}`);