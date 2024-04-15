import { Schema, model } from "mongoose";
import { TEnroll } from "./enrollInterface";

const enrollSchema = new Schema<TEnroll>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    course: {
      type: Schema.Types.ObjectId,
      required: [true, "course id is required"],
      ref: "BikeCourse",
    },
  },
  {
    timestamps: true,
  }
);

export const Enroll = model<TEnroll>("Enroll", enrollSchema);
