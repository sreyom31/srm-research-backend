import express from 'express';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import { errorConverter, errorHandler } from '../middlewares/error';
import ApiError from '../utils/ApiError';
import config from '../config';
import morgan from './morgan';
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const httpStatus = require('http-status');

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

  app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
  });
  app.use(errorConverter);
  app.use(errorHandler);
};
