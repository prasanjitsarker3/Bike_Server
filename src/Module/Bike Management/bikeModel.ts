import { Schema, model } from "mongoose";
import { TBike } from "./bikeInterface";

const bikeSchema = new Schema<TBike>({
  name: {
    type: String,
    required: [true, "Bike name is required !"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is Required !"],
  },
  brand: {
    type: String,
    required: [true, "Brand is required!"],
  },
  model: {
    type: String,
    required: [true, "Model is required!"],
  },
  type: {
    type: String,
    required: [true, "Type is required!"],
  },
  size: {
    type: String,
    required: [true, "Size is required!"],
  },
  color: {
    type: String,
    required: [true, "Color is required!"],
  },
  releaseDate: {
    type: Date,
    default: new Date(),
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Bike = model<TBike>("Bike", bikeSchema);
