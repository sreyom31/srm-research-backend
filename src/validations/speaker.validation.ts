import z from 'zod';
import { Types } from 'mongoose';

const createSpeaker = z.object({
  body: z.object({
    name: z.string().trim(),
    email: z.string().email().trim(),
    profile: z.string().trim(),
    desc: z.string().trim(),
    designation: z.string().trim(),
    dept: z.string().trim(),
    country: z.string().trim(),
  }),
});

const getSpeakers = z.object({
  query: z
    .object({
      name: z.string().trim(),
      email: z.string().email().trim(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getSpeaker = z.object({
  params: z.object({
    speakerId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid speaker id',
        path: ['Speaker Query'],
      }),
  }),
});

const updateSpeaker = z.object({
  params: z.object({
    speakerId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid speaker id',
        path: ['Speaker update'],
      }),
  }),
  body: z
    .object({
      name: z.string().trim(),
      email: z.string().email().trim(),
      profile: z.string().trim(),
      desc: z.string().trim(),
      designation: z.string().trim(),
      dept: z.string().trim(),
      country: z.string().trim(),
    })
    .partial()
    .refine((body) => Object.keys(body).length > 0, {
      message: 'Need atlease One field to update',
      path: ['Speaker update'],
    }),
});

const deleteSpeaker = z.object({
  params: z.object({
    speakerId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid speaker id',
        path: ['Speaker delete'],
      }),
  }),
});

export default {
  createSpeaker,
  getSpeakers,
  getSpeaker,
  updateSpeaker,
  deleteSpeaker,
};
