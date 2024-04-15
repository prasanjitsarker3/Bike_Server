import { Model } from "mongoose";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "user" | "manager";
  date?: Date;
};

export interface UserModel extends Model<TUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}

export const USER_ROLE = {
  user: "user",
  manager: "manager",
} as const;
export type TUserRole = keyof typeof USER_ROLE;
