import { Schema, model } from "mongoose";
import { TService } from "./serviceInterface";

const serviceSchema = new Schema<TService>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    saleBike: {
      type: Schema.Types.ObjectId,
      required: [true, "Bike id is required"],
      ref: "Sales",
    },
    bike: {
      type: Schema.Types.ObjectId,
      required: [true, "Bike id is required"],
      ref: "Bike",
    },
    lastService: {
      type: Date,
      default: new Date(),
    },
    nextService: {
      type: Date,
      default: null,
    },
    details: {
      type: String,
    },
    note: {
      type: String,
    },
    discount: {
      type: String,
      default: "0%",
    },
  },
  {
    timestamps: true,
  }
);

export const Service = model<TService>("Service", serviceSchema);
