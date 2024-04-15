import catchAsync from "../../UtlisFunction/catchAsync";
import sendResponse from "../../UtlisFunction/sendResponse";
import { maintenanceBikeService } from "./serviceService";

const createBikeService = catchAsync(async (req, res) => {
  const result = await maintenanceBikeService.createServiceIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Service Post successfully!",
    data: result,
  });
});
const allBikeService = catchAsync(async (req, res) => {
  const result = await maintenanceBikeService.getAllServiceFromDB();
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Get all service successfully!",
    data: result,
  });
});

const userServiceRequest = catchAsync(async (req, res) => {
  // const { email } = req.query;
  const email: string | undefined = req.query.email as string | undefined;
  console.log(email);
  const result = await maintenanceBikeService.getUserServiceRequestFromDB(
    email
  );
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Get User Service successfully!",
    data: result,
  });
});
const managerUpdateServiceRequest = catchAsync(async (req, res) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  const { id } = req.params;
  const data = req.body;

  const result = await maintenanceBikeService.updateUserServiceRequest(
    id,
    data
  );
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Update service successfully!",
    data: result,
  });
});

export const serviceController = {
  createBikeService,
  allBikeService,
  userServiceRequest,
  managerUpdateServiceRequest,
};
