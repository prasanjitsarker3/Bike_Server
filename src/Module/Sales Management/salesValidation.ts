import { z } from "zod";
export const createSalesValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    quantity: z.number(),
  }),
});
