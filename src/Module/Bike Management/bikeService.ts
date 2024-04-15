/* eslint-disable @typescript-eslint/no-explicit-any */
import { buildBikeQuery } from "../../UtlisFunction/buildQuery";
import { TBike } from "./bikeInterface";
import { Bike } from "./bikeModel";

const createBikeIntoDB = async (payload: TBike) => {
  const result = await Bike.create(payload);
  return result;
};

const getAllBikeData = async (filters: any) => {
  const query = buildBikeQuery(filters);
  query.quantity = { $gt: 0 };
  query.isDeleted = false;
  return await Bike.find(query);
};

export { getAllBikeData };

const getSingleBikeData = async (id: string) => {
  const result = await Bike.findById(id);
  console.log(result);
  return result;
};
const getDeletedBike = async (id: string) => {
  const result = await Bike.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  );
  return result;
};

const updateBikeData = async (id: string, payload: Partial<TBike>) => {
  const result = await Bike.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const allBulkDeleteBikeData = async (payload: any) => {
  const deletedBikes = await Bike.deleteMany({ _id: { $in: payload.bulk } });
  return deletedBikes;
};

export const bikeService = {
  createBikeIntoDB,
  getAllBikeData,
  getSingleBikeData,
  getDeletedBike,
  updateBikeData,
  allBulkDeleteBikeData,
};
