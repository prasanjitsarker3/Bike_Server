import { Router } from "express";
import { bikeRoutes } from "../Module/Bike Management/bikeRoute";
import { salesRoutes } from "../Module/Sales Management/salesRoute";
import { userRoutes } from "../Module/User/userRoute";
import { serviceRoutes } from "../Module/MaintenceService/serviceRoute";
import { bikeCourseRoutes } from "../Module/BikeCourse/bikeCourseRoute";
import { enrollRoutes } from "../Module/EnrollCourse/enrollRoute";

const router = Router();

const moduleRoutes = [
  {
    path: "/bikes",
    route: bikeRoutes,
  },
  {
    path: "/sales",
    route: salesRoutes,
  },
  {
    path: "/auth",
    route: userRoutes,
  },
  {
    path: "/service",
    route: serviceRoutes,
  },
  {
    path: "/course",
    route: bikeCourseRoutes,
  },
  {
    path: "/enroll",
    route: enrollRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
