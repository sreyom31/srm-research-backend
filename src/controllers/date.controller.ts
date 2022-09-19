import httpStatus from 'http-status';
import catchAsync from '../utils/CatchAsync';
import { dateService } from '../services';
import ApiError from '../utils/ApiError';

const createDate = catchAsync(async (req, res) => {
  const date = await dateService.createDate(req.body);
  res.status(httpStatus.CREATED).send(date);
});

const getDate = catchAsync(async (req, res) => {
  const date = await dateService.getDateById(req.params.dateId);
  if (!date) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Date not found');
  }
  res.send(date);
});

const getDates = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'date']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await dateService.queryDates(filter, options);
  res.send(result);
});

const updateDate = catchAsync(async (req, res) => {
  const date = await dateService.updateDateById(req.params.dateId, req.body);
  res.send(date);
});

const deleteDate = catchAsync(async (req, res) => {
  await dateService.deleteDateById(req.params.dateId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createDate,
  getDate,
  getDates,
  updateDate,
  deleteDate,
};
