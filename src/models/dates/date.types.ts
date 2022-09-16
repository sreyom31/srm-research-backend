import { Document } from 'mongoose';

export interface IDate extends Document {
  paperSubmission: Date;
  notificationDeadline: Date;
  cameraReadyDeadline: Date;
  revisedPaperSubmission: Date;
}
