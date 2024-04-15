import { Schema, model } from "mongoose";
import { TBikeCourse } from "./bikeCourseInterface";

const bikeCourseSchema = new Schema<TBikeCourse>({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  instructor: {
    type: String,
  },
  startDate: {
    type: Date,
    default: new Date(),
  },
  duration: {
    type: Number,
  },
  difficulty: {
    type: String,
  },
  maxParticipants: {
    type: Number,
  },
  location: {
    type: String,
  },
  enroll: {
    type: Number,
    default: 0,
  },
});

export const BikeCourse = model<TBikeCourse>("BikeCourse", bikeCourseSchema);
