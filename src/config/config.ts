export const config = {
  dev: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "",
    aws_region: process.env.AWS_REGION,
    aws_profile: process.env.AWS_PROFILE,
    aws_acess_key_id: process.env.AWS_ACCESS_KEY_ID,
    "aws-secret_access_key": process.env.AWS_SECRET_ACCESS_KEY,
  },
  jwt: {
    secret: "hellojs",
  },
  prod: {
    username: "",
    password: "",
    database: "",
    host: "",
    dialect: "",
  },
};
