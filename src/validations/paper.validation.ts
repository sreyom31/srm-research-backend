import { z } from 'zod';
import { Types } from 'mongoose';

const createPaper = z.object({
  body: z.object({
    title: z.string().trim(),
    topics: z.array(
      z.object({
        name: z.string().trim(),
      })
    ),
  }),
});

const getPapers = z.object({
  query: z.object({
    name: z.string().trim(),
  }),
});

const getPaper = z.object({
  params: z.object({
    paperId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid paper id',
        path: ['Paper Query'],
      }),
  }),
});

const updatePaper = z.object({
  params: z.object({
    paperId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid paper id',
        path: ['Paper update'],
      }),
  }),
  body: z.object({
    title: z.string().trim(),
    topics: z
      .array(
        z.object({
          name: z.string().trim(),
        })
      )
      .refine((body) => Object.keys(body).length > 0, {
        message: 'Need atleast one field to update',
        path: ['Paper update'],
      }),
  }),
});

const deletePaper = z.object({
  params: z.object({
    paperId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid paper id',
        path: ['Paper delete'],
      }),
  }),
});

export default {
  createPaper,
  getPapers,
  getPaper,
  updatePaper,
  deletePaper,
};
