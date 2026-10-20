import dotenv from "dotenv";

// Load .env values into process.env
dotenv.config();

// Read values from process.env
const baseUrl = process.env.BASE_URL;
const username = process.env.ORANGEHRM_USERNAME;
const password = process.env.ORANGEHRM_PASSWORD;
const headlessText = process.env.HEADLESS;

// Validate required values
if (!baseUrl) {
  throw new Error("BASE_URL is missing in .env file");
}

if (!username) {
  throw new Error("ORANGEHRM_USERNAME is missing in .env file");
}

if (!password) {
  throw new Error("ORANGEHRM_PASSWORD is missing in .env file");
}

// Convert HEADLESS text -> boolean
// If HEADLESS not provided, default to true
let headless = true;
if (headlessText) {
  headless = headlessText.toLowerCase() === "true";
}

// Export one simple object
export const env = {
  baseUrl,
  username,
  password,
  headless,
};
