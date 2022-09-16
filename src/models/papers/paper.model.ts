import { model } from 'mongoose';
import { IPaper } from './paper.types';
import PaperSchema from './paper.schema';

export const PaperModel = model<IPaper>('paper', PaperSchema);
