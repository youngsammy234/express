import { env } from "./env.js";

export default {
  development: {
    url: env.db_uri,
    dialect: "postgres"
  },
  test: {
    url: env.db_uri,
    dialect: "postgres"
  },
  production: {
    url: env.db_uri,
    dialect: "postgres"
  },
};
