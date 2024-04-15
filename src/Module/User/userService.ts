import AppError from "../../Error/AppError";
import { createToken } from "../../UtlisFunction/createToken";
import config from "../../config";
import { TUser } from "./userInterface";
import { User } from "./userModel";
import { JwtPayload } from "jsonwebtoken";

const userRegistration = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const userLogin = async (payload: TUser) => {
  const { email } = payload;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new AppError(404, "User Not Found!");
  }
  const isPasswordMatched = await User.isPasswordMatched(
    payload.password,
    user.password
  );

  if (!isPasswordMatched) {
    throw new AppError(401, "Password does not match!");
  }

  const jwtPayload: JwtPayload = {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
  const token = createToken(
    jwtPayload,
    config.accessToken as string,
    config.accessTokenExpaierDate as string
  );
  return token;
};

export const userService = {
  userRegistration,
  userLogin,
};
