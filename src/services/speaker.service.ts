import httpStatus from 'http-status';
import { Speaker, SpeakerUpdate } from '../shared/customTypes';
import SpeakerModel from '../models/speakers/speaker.model';
import ApiError from '../utils/ApiError';

const createSpeaker = async (speakerBody: Speaker) => {
  if (await SpeakerModel.isEmailTaken(speakerBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return SpeakerModel.create(speakerBody);
};

const getSpeakerById = async (id: string) => SpeakerModel.findById(id);
const getSpeakerByEmail = async (email: string) =>
  SpeakerModel.findOne({ email });

const querySpeakers = async (filter: any, options: any) => {
  const speakers = await SpeakerModel.paginate(filter, options);
  return speakers;
};

const updateSpeakerById = async (
  speakerId: string,
  updateBody: SpeakerUpdate
) => {
  const speaker = await getSpeakerById(speakerId);
  if (!speaker) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Speaker not found');
  }
  if (
    updateBody.email &&
    (await SpeakerModel.isEmailTaken(updateBody.email, speakerId))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(speaker, updateBody);
  await speaker.save();
  return speaker;
};

const deleteSpeakerById = async (speakerId: string) => {
  const speaker = await getSpeakerById(speakerId);
  if (!speaker) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Speaker not found');
  }
  await speaker.remove();
  return speaker;
};

export default {
  createSpeaker,
  updateSpeakerById,
  querySpeakers,
  deleteSpeakerById,
  getSpeakerById,
  getSpeakerByEmail,
};
