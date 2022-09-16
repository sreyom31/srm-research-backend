import { Schema } from 'mongoose';

const DateSchema = new Schema({
  paperSubmission: {
    type: Date,
    required: [true, 'Paper submission date is required'],
    trim: true,
  },
  notificationDeadline: {
    type: Date,
    required: [true, 'Notification deadline date is required'],
    trim: true,
  },
  cameraReadyDeadline: {
    type: Date,
    required: [true, 'Camera ready deadline date is required'],
    trim: true,
  },
  revisedPaperSubmission: {
    type: Date,
    required: [true, 'Revised paper submission date is required'],
    trim: true,
  },
});

export default DateSchema;