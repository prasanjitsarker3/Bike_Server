import express from "express";
import { bikeController } from "./bikeController";
import validateRequest from "../../Middlewares/validationRequest";
import { createBikeValidationSchema } from "./bikeValidation";
import auth from "../../Middlewares/auth";
import { USER_ROLE } from "../User/userInterface";

const router = express.Router();

router.post(
  "/create",
  auth(USER_ROLE.manager, USER_ROLE.user),
  validateRequest(createBikeValidationSchema),
  bikeController.createBike
);
router.get("/", bikeController.getAllBikeData);
router.get("/:id", bikeController.singleBikeData);
router.delete("/:id", bikeController.deleteBike);
router.put(
  "/:id",
  validateRequest(createBikeValidationSchema),
  bikeController.updateBikeInformation
);
router.post("/bulkDelete", bikeController.bulkDeletedBike);

export const bikeRoutes = router;
