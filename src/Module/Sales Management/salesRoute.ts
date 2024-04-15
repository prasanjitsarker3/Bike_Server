import express from "express";
import validateRequest from "../../Middlewares/validationRequest";
import { createSalesValidationSchema } from "./salesValidation";
import { salesController } from "./salesControler";
const router = express.Router();

router.post(
  "/sellBike",
  validateRequest(createSalesValidationSchema),
  salesController.salesBike
);
router.get("/history", salesController.getSalesAllBike);
router.get("/", salesController.userByBike);
router.get("/:saleId", salesController.singleSaleBike);

export const salesRoutes = router;
