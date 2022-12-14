export type User = {
  name: string;
  email: string;
  password: string;
};

export type UserUpdate = {
  name?: string;
  email?: string;
  password?: string;
  domain?: string;
  designation?: string;
  isEmailVerified?: boolean;
};

export type Speaker = {
  name: string;
  email: string;
  profile: string;
  desc: string;
  designation: string;
  dept: string;
  country: string;
};

export type SpeakerUpdate = {
  name?: string;
  email?: string;
  profile?: string;
  desc?: string;
  designation?: string;
  dept?: string;
  country?: string;
};

export type Date = {
  name: string;
  date: string;
};

export type DateUpdate = {
  name?: string;
  date?: string;
};

export type Paper = {
  title: string;
  topics: string[];
};

export type PaperUpdate = {
  title?: string;
  topics?: string[];
};
