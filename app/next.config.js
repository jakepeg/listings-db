require("dotenv").config();
const prod = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    BASE_URL: prod ? "https://discoverdoo.com" : "http://localhost:3001",
    CLIENT_URL: prod ? "https://discoverdoo.com" : "http://localhost:3000"
  }
};
