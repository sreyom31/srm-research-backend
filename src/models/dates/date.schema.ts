import { Schema } from 'mongoose';

const DateSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name of the date field is required'],
    trim: true,
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
});

export default DateSchema;
