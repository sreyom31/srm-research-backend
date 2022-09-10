import express from 'express';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import config from '../config';
import morgan from './morgan';
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');

export default ({ app }: { app: express.Application }) => {
  if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
  }

  // set security HTTP headers
  app.use(helmet());

  // parse json request body with limit
  app.use(express.json({ limit: '100kb' }));

  // parse urlencoded request body
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));

  // sanitize request data
  app.use(xss());
  app.use(mongoSanitize());

  // gzip compression
  app.use(compression());

  // enable cors
  app.use(cors());
};
