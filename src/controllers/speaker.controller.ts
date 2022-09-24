import httpStatus from 'http-status';
import catchAsync from '../utils/CatchAsync';
import speakerService from '../services/speaker.service';
import ApiError from '../utils/ApiError';
import pick from '../utils/pick';

const createSpeaker = catchAsync(async (req, res) => {
  const speaker = await speakerService.createSpeaker(req.body);
  res.status(httpStatus.CREATED).send(speaker);
});

const getSpeaker = catchAsync(async (req, res) => {
  const speaker = await speakerService.getSpeakerById(req.params.speakerId);
  if (!speaker) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Speaker not found');
  }
  res.send(speaker);
});

const getSpeakers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'email']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await speakerService.querySpeakers(filter, options);
  res.send(result);
});

const updateSpeaker = catchAsync(async (req, res) => {
  const speaker = await speakerService.updateSpeakerById(
    req.params.speakerId,
    req.body
  );
  res.send(speaker);
});

const deleteSpeaker = catchAsync(async (req, res) => {
  await speakerService.deleteSpeakerById(req.params.speakerId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createSpeaker,
  getSpeaker,
  getSpeakers,
  updateSpeaker,
  deleteSpeaker,
};
