/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from "../../Error/AppError";
import { Bike } from "../Bike Management/bikeModel";
import { TSales } from "./salesInterface";
import { Sales } from "./salesMode";

const salesBikeIntoDB = async (payload: TSales) => {
  const bike = await Bike.findById(payload.saleId);
  if (!bike) {
    throw new AppError(404, "Specific bike data not found");
  }
  bike.quantity -= payload.quantity;
  await bike.save();
  const newSale = new Sales(payload);
  const result = await newSale.save();
  console.log(result);
  return result;
};

const getAllSalesBike = async (query: any) => {
  let result;
  if (query.daily) {
    const today = new Date();
    const salesHistory = await Sales.find({
      date: {
        $gte: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          0,
          0,
          0
        ),
      },
    });
    result = salesHistory;
  } else if (query.weekly) {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const endOfWeek = new Date();
    endOfWeek.setDate(endOfWeek.getDate() + (6 - endOfWeek.getDay()));
    const salesHistory = await Sales.find({
      date: { $gte: startOfWeek, $lte: endOfWeek },
    });
    result = salesHistory;
  } else if (query.monthly) {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    const endOfMonth = new Date(
      startOfMonth.getFullYear(),
      startOfMonth.getMonth() + 1,
      0
    );
    const salesHistory = await Sales.find({
      date: { $gte: startOfMonth, $lte: endOfMonth },
    });
    result = salesHistory;
  } else if (query.yearly) {
    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(currentYear, 0, 1);
    const endOfYear = new Date(currentYear, 11, 31);
    result = await Sales.find({
      date: { $gte: startOfYear, $lte: endOfYear },
    });
  } else {
    result = await Sales.find();
  }

  return result;
};

const userGetByBikesFromDB = async (email: string | undefined) => {
  const salesBike = await Sales.find({ email }).populate("saleId");
  if (!salesBike) {
    throw new AppError(404, "User Can't Bye Bike");
  }
  return salesBike;
};

const getSingleSaleBikeFromDB = async (id: string) => {
  const singleBike = await Sales.findById(id).populate("saleId");
  if (!singleBike) {
    throw new AppError(404, "Not found sales bike");
  }
  return singleBike;
};

export const salesService = {
  salesBikeIntoDB,
  getAllSalesBike,
  userGetByBikesFromDB,
  getSingleSaleBikeFromDB,
};
