import httpStatus from 'http-status';
import { Paper, PaperUpdate } from './../shared/customTypes';
import { PaperModel } from './../models/papers/paper.model';
import ApiError from '../utils/ApiError';

const createPaper = async (paperBody: Paper) => {
  if (await PaperModel.findOne({ title: paperBody.title })) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Paper already exists');
  }
  return PaperModel.create(paperBody);
};

const getPaperById = async (id: string) => PaperModel.findById(id);

const queryPapers = async () => {
  const papers = await PaperModel.find({});
  return papers;
};

const updatePaperById = async (paperId: string, updateBody: PaperUpdate) => {
  const paper = await getPaperById(paperId);
  if (!paper) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Paper not found');
  }
  Object.assign(paper, updateBody);
  await paper.save();
  return paper;
};

const deletePaperById = async (paperId: string) => {
  const paper = await getPaperById(paperId);
  if (!paper) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Paper not found');
  }
  await paper.remove();
  return paper;
};

export default {
  createPaper,
  getPaperById,
  queryPapers,
  updatePaperById,
  deletePaperById,
};
