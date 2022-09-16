import { Document } from 'mongoose';

export interface IDate extends Document {
  name: string;
  date: Date;
}
