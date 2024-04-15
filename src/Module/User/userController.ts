import catchAsync from "../../UtlisFunction/catchAsync";
import sendResponse from "../../UtlisFunction/sendResponse";
import { userService } from "./userService";

const registration = catchAsync(async (req, res) => {
  const result = await userService.userRegistration(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User Registration successfully",
    data: result,
  });
});
const login = catchAsync(async (req, res) => {
  const result = await userService.userLogin(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User Registration successfully",
    data: result,
  });
});

export const userController = {
  registration,
  login,
};
