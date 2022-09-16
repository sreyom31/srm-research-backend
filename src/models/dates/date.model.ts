import { model } from 'mongoose';
import { IDate } from './date.types';
import DateSchema from './date.schema';

export const DateModel = model<IDate>('date', DateSchema);
