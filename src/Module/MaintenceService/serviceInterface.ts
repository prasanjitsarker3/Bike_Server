import { Types } from "mongoose";

export type TService = {
  name: string;
  email: string;
  saleBike: Types.ObjectId;
  bike: Types.ObjectId;
  lastService: Date;
  nextService?: Date;
  details: string;
  note: string;
  discount: string;
};
