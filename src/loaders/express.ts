import express from 'express';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');

export default ({ app }: { app: express.Application }) => {
  app.use(helmet());
  app.use(express.json({ limit: '100kb' }));
  app.use(xss());
  app.use(mongoSanitize());
  app.use(compression());
  app.use(cors());
};
