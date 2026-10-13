import jwt from "jsonwebtoken";

export const aToken = (payload) => {
  return jwt.sign(payload, "JSSJSJHJDHL2222NN2N", { expiresIn: "2MINS" });
};
