import { Types } from "mongoose";

export type TSales = {
  saleId: Types.ObjectId;
  quantity: number;
  name: string;
  date: Date;
  email: string;
};
