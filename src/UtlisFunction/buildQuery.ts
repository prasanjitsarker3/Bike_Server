/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BikeFilters {
  priceRange?: { min: number; max: number };
  releaseDate?: { from: Date; to: Date };
  brand?: string;
  model?: string;
  type?: string;
  size?: string;
  color?: string;
  price?: string;
}

export const buildBikeQuery = (filters: BikeFilters) => {
  // eslint-disable-next-line prefer-const
  let query: any = {};

  if (filters.priceRange) {
    query.price = {
      $gte: filters.priceRange.min,
      $lte: filters.priceRange.max,
    };
  }

  if (filters.releaseDate) query.releaseDate4 = filters.releaseDate;
  if (filters.brand) query.brand = filters.brand;
  if (filters.model) query.model = filters.model;
  if (filters.type) query.type = filters.type;
  if (filters.size) query.size = filters.size;
  if (filters.color) query.color = filters.color;
  if (filters.price) query.price = filters.price;

  return query;
};
