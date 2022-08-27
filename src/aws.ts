import AWS = require("aws-sdk");
import { config } from "./config/config";

const c = config.dev;

if (c.aws_profile !== "DEPLOYED") {
  var credentials = new AWS.SharedIniFileCredentials({
    profile: c.aws_profile,
  });
  AWS.config.credentials = credentials;
}
