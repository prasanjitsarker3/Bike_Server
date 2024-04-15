import express from "express";
import { serviceController } from "./serviceController";
const router = express.Router();

router.post("/create-service", serviceController.createBikeService);
router.get("/", serviceController.allBikeService);
router.get("/user-service", serviceController.userServiceRequest);
router.patch("/:id", serviceController.managerUpdateServiceRequest);

export const serviceRoutes = router;
