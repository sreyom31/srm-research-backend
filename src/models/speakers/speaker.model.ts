import { model } from 'mongoose';
import { ISpeaker } from './speaker.types';
import SpeakerSchema from './speaker.schema';

export const SpeakerModel = model<ISpeaker>('speaker', SpeakerSchema);
