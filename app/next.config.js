require("dotenv").config();
const prod = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    BASE_URL: prod ? "https://listings-db.now.sh" : "http://localhost:3001"
  }
};
