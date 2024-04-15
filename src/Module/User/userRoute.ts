import express from "express";
import validateRequest from "../../Middlewares/validationRequest";
import { userValidationSchema } from "./userValidation";
import { userController } from "./userController";
const router = express.Router();

router.post(
  "/register",
  validateRequest(userValidationSchema),
  userController.registration
);

router.post(
  "/login",
  validateRequest(userValidationSchema),
  userController.login
);

export const userRoutes = router;
