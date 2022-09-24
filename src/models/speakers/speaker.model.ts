import { model } from 'mongoose';
import { ISpeakerModel, ISpeakerDocument } from './speaker.types';
import SpeakerSchema from './speaker.schema';

const SpeakerModel = model<ISpeakerDocument, ISpeakerModel>(
  'speaker',
  SpeakerSchema
);
export default SpeakerModel;
