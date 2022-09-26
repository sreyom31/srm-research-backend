import { Schema } from 'mongoose';
import validator from 'validator';
import { paginate, toJSON } from '../plugins';
import { isEmailTaken } from './speaker.statics';

const SpeakerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  profile: {
    type: String,
  },
  desc: {
    type: String,
    required: [true, 'Description is required'],
  },
  designation: {
    type: String,
    required: [true, 'Designation is required'],
  },
  dept: {
    type: String,
    required: [true, 'Department is required'],
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
});

SpeakerSchema.plugin(toJSON);
SpeakerSchema.plugin(paginate);
SpeakerSchema.statics.isEmailTaken = isEmailTaken;
export default SpeakerSchema;
