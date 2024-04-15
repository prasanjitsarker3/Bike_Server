import AppError from "../../Error/AppError";
import { BikeCourse } from "../BikeCourse/bikeCourseModel";
import { TEnroll } from "./enrollInterface";
import { Enroll } from "./enrollModel";

const createdEnrollIntoDB = async (payload: TEnroll) => {
  const enrollCheck = await Enroll.findOne({
    course: payload.course,
    email: payload.email,
  });
  if (enrollCheck) {
    throw new AppError(404, "All Ready Enroll Course");
  }
  const course = await BikeCourse.findOne({ _id: payload.course });
  if (!course) {
    throw new AppError(404, "Course not found");
  }
  course.enroll = (course.enroll || 0) + 1;
  await course.save();
  const result = await Enroll.create(payload);
  return result;
};

const getAllEnrollFromDB = async (email: string | undefined) => {
  if (email) {
    console.log(email);
    const result = await Enroll.find({ email: email }).populate("course");
    return result;
  } else {
    const result = await Enroll.find().populate("course");
    return result;
  }
};

export const enrollService = {
  createdEnrollIntoDB,
  getAllEnrollFromDB,
};
