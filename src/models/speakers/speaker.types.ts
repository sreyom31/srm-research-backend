import { Document } from 'mongoose';

export interface ISpeaker extends Document {
  name: string;
  email: string;
  profile: string;
  desc: string;
  designation: string;
  dept: string;
  country: string;
}
