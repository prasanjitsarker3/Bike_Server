import { TBikeCourse } from "./bikeCourseInterface";
import { BikeCourse } from "./bikeCourseModel";

const createBikeCourseIntoDB = async (payload: TBikeCourse) => {
  const result = await BikeCourse.create(payload);
  return result;
};

const getAllBikeCourseFromDB = async () => {
  const result = await BikeCourse.find();
  return result;
};

const deletedBikeCourseFromDB = async (id: string) => {
  const result = await BikeCourse.findByIdAndDelete(id);
  return result;
};

export const bikeCourseService = {
  createBikeCourseIntoDB,
  getAllBikeCourseFromDB,
  deletedBikeCourseFromDB,
};
