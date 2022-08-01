const { schedule } = require("@netlify/functions");
import fetch from "node-fetch";

const REBUILD_URL = process.env.REBUILD_URL;
const handler = async function (event, context) {
  console.log("site rebuild triggered by scheduled function at ", Date.now());
  try {
    await fetch(REBUILD_URL, { method: "POST" });
    return {
      statusCode: 200,
    };
  } catch {
    console.log("error rebuilding: ", REBUILD_URL);
    return {
      statusCode: 500,
    };
  }
};

module.exports.handler = schedule("@hourly", handler);
