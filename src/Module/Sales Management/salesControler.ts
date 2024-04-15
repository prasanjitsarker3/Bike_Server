import catchAsync from "../../UtlisFunction/catchAsync";
import sendResponse from "../../UtlisFunction/sendResponse";
import { salesService } from "./salesService";

const salesBike = catchAsync(async (req, res) => {
  const result = await salesService.salesBikeIntoDB(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Sales bike successfully!",
    data: result,
  });
});

const getSalesAllBike = catchAsync(async (req, res) => {
  const { daily, weekly, monthly, yearly } = req.query;
  const result = await salesService.getAllSalesBike({
    daily,
    weekly,
    monthly,
    yearly,
  });
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "All Sales bike fetch successfully!",
    data: result,
  });
});

const userByBike = catchAsync(async (req, res) => {
  const email: string | undefined = req.query.email as string | undefined;
  const result = await salesService.userGetByBikesFromDB(email);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Get Sales bike successfully!",
    data: result,
  });
});
const singleSaleBike = catchAsync(async (req, res) => {
  const { saleId } = req.params;
  const result = await salesService.getSingleSaleBikeFromDB(saleId);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Get single bike successfully!",
    data: result,
  });
});

export const salesController = {
  salesBike,
  getSalesAllBike,
  userByBike,
  singleSaleBike,
};
