import { TSales } from "./salesInterface";
import { Schema, model } from "mongoose";

const salesSchema = new Schema<TSales>(
  {
    saleId: {
      type: Schema.Types.ObjectId,
      required: [true, "Bike id is required"],
      ref: "Bike",
    },
    name: {
      type: String,
      required: [true, "Name is required !"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required!"],
    },
    date: {
      type: Date,
      default: new Date(),
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Sales = model<TSales>("Sales", salesSchema);
