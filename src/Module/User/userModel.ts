/* eslint-disable @typescript-eslint/no-this-alias */
import config from "../../config";
import { TUser, UserModel } from "./userInterface";
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email must be required!"],
    },
    password: {
      type: String,
      required: [true, "Password must be required"],
      select: 0,
    },
    role: {
      type: String,
      enum: ["user", "manager"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcryptSalt));
  next();
});
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUser, UserModel>("User", userSchema);
