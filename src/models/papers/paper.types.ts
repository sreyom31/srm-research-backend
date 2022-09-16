import { Document } from 'mongoose';

export interface IPaper extends Document {
  title: string;
  topics: Array<{ name: string }>;
}
