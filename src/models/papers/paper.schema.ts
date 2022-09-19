import { Schema } from 'mongoose';

const PaperSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    unique: true,
  },
  topics: {
    type: [{ name: String }],
  },
});

export default PaperSchema;
