import { Schema } from 'mongoose';

const PaperSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true,
  },
  topics: {
    type: [{ type: String }],
  },
});

export default PaperSchema;
