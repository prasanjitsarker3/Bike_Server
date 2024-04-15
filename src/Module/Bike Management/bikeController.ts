import catchAsync from "../../UtlisFunction/catchAsync";
import sendResponse from "../../UtlisFunction/sendResponse";
import { bikeService } from "./bikeService";

const createBike = catchAsync(async (req, res) => {
  const result = await bikeService.createBikeIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Bike Inventory created successfully",
    data: result,
  });
});

const getAllBikeData = catchAsync(async (req, res) => {
  const filters = req.query;
  const result = await bikeService.getAllBikeData(filters);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bike data fetched successfully",
    data: result,
  });
});
const singleBikeData = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bikeService.getSingleBikeData(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Bike data fetch successfully",
    data: result,
  });
});
const deleteBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("Checking", id);
  const result = await bikeService.getDeletedBike(id);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Bike are deleted successfully",
    data: result,
  });
});
const updateBikeInformation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bikeService.updateBikeData(id, req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Bike are update successfully",
    data: result,
  });
});

const bulkDeletedBike = catchAsync(async (req, res) => {
  const result = await bikeService.allBulkDeleteBikeData(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Bike are deleted successfully",
    data: result,
  });
});

export const bikeController = {
  createBike,
  getAllBikeData,
  singleBikeData,
  deleteBike,
  updateBikeInformation,
  bulkDeletedBike,
};
