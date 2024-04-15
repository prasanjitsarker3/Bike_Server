/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../Module/User/userInterface";
import catchAsync from "../UtlisFunction/catchAsync";
import { handleUnauthorized } from "../UtlisFunction/unauthorizedError";
import config from "../config";
import AppError from "../Error/AppError";
import { User } from "../Module/User/userModel";

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      handleUnauthorized(res, {
        success: false,
        message: "Unauthorized Access",
        errorMessage: "No JWT provided in the request headers.",
        errorDetails: null,
        stack: null,
      });
      return;
    }

    if (!config.accessToken) {
      throw new Error("Access token configuration is missing");
    }
    const decoded = jwt.verify(
      token,
      config.accessToken as string
    ) as JwtPayload;
    const { id, name, role, email, iat } = decoded;

    const user = await User.findById(id).select("+password");

    if (!user) {
      throw new AppError(404, "User Not Found!");
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      handleUnauthorized(res, {
        success: false,
        message: "Unauthorized Access",
        errorMessage:
          "You do not have the necessary permissions to access this resource.",
        errorDetails: null,
        stack: null,
      });
      return;
    }

    req.user = decoded as JwtPayload;
    next();
  });
};
export default auth;
