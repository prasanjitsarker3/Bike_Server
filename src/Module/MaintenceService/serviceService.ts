import AppError from "../../Error/AppError";
import { TService } from "./serviceInterface";
import { Service } from "./serviceModel";

const createServiceIntoDB = async (payload: TService) => {
  const { email } = payload;
  const userService = await Service.find({ email });
  const length = userService?.length || 0;
  let discount: string;
  if (length <= 1) {
    discount = "0%";
  } else if (length <= 5) {
    discount = "5%";
  } else {
    discount = "10%";
  }
  payload.discount = discount;
  const result = await Service.create(payload);
  return result;
};

const getAllServiceFromDB = async () => {
  const result = await Service.find().populate("bike saleBike");
  return result;
};

const getUserServiceRequestFromDB = async (email: string | undefined) => {
  console.log(email);
  const salesBike = await Service.find({ email }).populate("saleBike bike");
  console.log(salesBike);
  return salesBike;
};

const updateUserServiceRequest = async (id: string, payload: TService) => {
  const service = await Service.findById(id);
  if (!service) {
    throw new AppError(404, "Service not found");
  }
  const updatedService = await Service.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return updatedService;
};

export const maintenanceBikeService = {
  createServiceIntoDB,
  getAllServiceFromDB,
  getUserServiceRequestFromDB,
  updateUserServiceRequest,
};
