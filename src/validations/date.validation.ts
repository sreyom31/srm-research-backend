import { Types } from 'mongoose';
import { z } from 'zod';

const createDate = z.object({
  body: z.object({
    name: z.string().trim(),
    date: z.date(),
  }),
});

const getDates = z.object({
  query: z
    .object({
      name: z.string().trim(),
      date: z.date(),
    })
    .partial(),
});

const getDate = z.object({
  params: z.object({
    dateId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid date id',
        path: ['Date Query'],
      }),
  }),
});

const updateDate = z.object({
  params: z.object({
    dateId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid date id',
        path: ['Date update'],
      }),
  }),
  body: z
    .object({
      name: z.string().trim(),
      date: z.date(),
    })
    .partial()
    .refine((body) => Object.keys(body).length > 0, {
      message: 'Need atlease One field to update',
      path: ['Date update'],
    }),
});

const deleteDate = z.object({
  params: z.object({
    speakerId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid date id',
        path: ['Date delete'],
      }),
  }),
});

export default {
  createDate,
  getDate,
  getDates,
  updateDate,
  deleteDate,
};
