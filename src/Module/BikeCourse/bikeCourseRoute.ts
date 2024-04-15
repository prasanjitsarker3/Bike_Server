import express from "express";
import { bikeCourseController } from "./bikeCourseController";
const router = express.Router();

router.post("/create-course", bikeCourseController.createBikeCourse);
router.get("/", bikeCourseController.getAllBikeCourse);
router.delete("/:id", bikeCourseController.deletedBikeCourse);
export const bikeCourseRoutes = router;
