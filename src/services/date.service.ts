import httpStatus from 'http-status';
import { DateModel } from '../models/dates/date.model';
import ApiError from '../utils/ApiError';
import { Date, DateUpdate } from '../shared/customTypes';

const createDate = async (dateBody: Date) => {
  if (await DateModel.findOne({ name: dateBody.name })) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Date already exists');
  }
  return DateModel.create(dateBody);
};

const getDateById = async (id: string) => DateModel.findById(id);

const queryDates = async () => {
  const dates = await DateModel.find({});
  return dates;
};

const updateDateById = async (dateId: string, updateBody: DateUpdate) => {
  const date = await getDateById(dateId);
  if (!date) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Date not found');
  }
  if (updateBody.name && (await DateModel.findOne({ name: updateBody.name }))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Date already exists');
  }
  Object.assign(date, updateBody);
  await date.save();
  return date;
};

const deleteDateById = async (dateId: string) => {
  const date = await getDateById(dateId);
  if (!date) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Date not found');
  }
  await date.remove();
  return date;
};

export default {
  createDate,
  updateDateById,
  queryDates,
  deleteDateById,
  getDateById,
};
