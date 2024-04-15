import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });
export default {
  port: process.env.port,
  dataBaseUrl: process.env.dataBaseUrl,
  projectProcess: process.env.projectProcess,
  bcryptSalt: process.env.bcryptSalt,
  accessTokenExpaierDate: process.env.accessTokenExpaierDate,
  accessToken: process.env.accessToken,
};
