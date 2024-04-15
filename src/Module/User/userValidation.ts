import { z } from "zod";
export const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: "Password Must Be String",
    })
    .max(12, { message: "Password length 12" })
    .optional(),
});
