import httpStatus from 'http-status';
import catchAsync from '../utils/CatchAsync';
import { paperService } from '../services';
import ApiError from '../utils/ApiError';

const createPaper = catchAsync(async (req, res) => {
  const paper = await paperService.createPaper(req.body);
  res.status(httpStatus.CREATED).send(paper);
});

const getPaper = catchAsync(async (req, res) => {
  const paper = await paperService.getPaperById(req.params.paperId);
  if (!paper) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Paper not found');
  }
  res.send(paper);
});

const getPapers = catchAsync(async (req, res) => {
  const result = await paperService.queryPapers();
  res.send(result);
});

const updatePaper = catchAsync(async (req, res) => {
  const paper = await paperService.updatePaperById(
    req.params.paperId,
    req.body
  );
  res.send(paper);
});

const deletePaper = catchAsync(async (req, res) => {
  await paperService.deletePaperById(req.params.paperId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createPaper,
  getPaper,
  getPapers,
  updatePaper,
  deletePaper,
};
