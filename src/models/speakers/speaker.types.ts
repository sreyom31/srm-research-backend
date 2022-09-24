import { Document, Model } from 'mongoose';

export interface ISpeaker {
  name: string;
  email: string;
  profile: string;
  desc: string;
  designation: string;
  dept: string;
  country: string;
}

export interface ISpeakerDocument extends ISpeaker, Document {}

export interface ISpeakerModel extends Model<ISpeakerDocument> {
  isEmailTaken: (
    this: ISpeakerModel,
    name: string,
    excludeId?: string
  ) => Promise<boolean>;
  paginate: (
    filter: any,
    options: any
  ) => {
    results: any;
    page: number;
    limit: number;
    totalPages: number;
    totalResults: any;
  };
}
