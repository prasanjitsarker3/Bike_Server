import catchAsync from "../../UtlisFunction/catchAsync";
import sendResponse from "../../UtlisFunction/sendResponse";
import { bikeCourseService } from "./bikeCourseService";

const createBikeCourse = catchAsync(async (req, res) => {
  const result = await bikeCourseService.createBikeCourseIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Bike course create successfully!",
    data: result,
  });
});
const getAllBikeCourse = catchAsync(async (req, res) => {
  const result = await bikeCourseService.getAllBikeCourseFromDB();
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Fetch data successfully!",
    data: result,
  });
});
const deletedBikeCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bikeCourseService.deletedBikeCourseFromDB(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Deleted successfully!",
    data: result,
  });
});

export const bikeCourseController = {
  createBikeCourse,
  getAllBikeCourse,
  deletedBikeCourse,
};
