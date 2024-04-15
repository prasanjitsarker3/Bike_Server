import { z } from "zod";

export const createBikeValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    brand: z.string(),
    model: z.string(),
    type: z.string(),
    size: z.string(),
    color: z.string(),
  }),
});
