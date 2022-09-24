import { Model } from 'mongoose';
import { ISpeakerDocument } from './speaker.types';

export async function isEmailTaken(
  this: Model<ISpeakerDocument>,
  email: string,
  excludeId: string
) {
  const user = await this.findOne({ email, _id: { $ne: excludeId || null } });
  console.log(email);
  return !!user;
}
