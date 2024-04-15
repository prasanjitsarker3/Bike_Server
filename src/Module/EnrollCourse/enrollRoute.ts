import express from "express";
import { enrollController } from "./enrollController";
const router = express.Router();

router.post("/create-enroll", enrollController.createEnroll);
router.get("/", enrollController.getUserEnroll);
export const enrollRoutes = router;
