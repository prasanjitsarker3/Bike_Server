import catchAsync from "../../UtlisFunction/catchAsync";
import sendResponse from "../../UtlisFunction/sendResponse";
import { enrollService } from "./enrollService";

const createEnroll = catchAsync(async (req, res) => {
  const result = await enrollService.createdEnrollIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Enroll create successfully!",
    data: result,
  });
});
const getUserEnroll = catchAsync(async (req, res) => {
  const email: string | undefined = req.query.email as string | undefined;
  const result = await enrollService.getAllEnrollFromDB(email);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Fetch enroll successfully!",
    data: result,
  });
});

export const enrollController = {
  createEnroll,
  getUserEnroll,
};
