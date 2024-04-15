import { Types } from "mongoose";

export type TEnroll = {
  name: string;
  email: string;
  course: Types.ObjectId;
};
