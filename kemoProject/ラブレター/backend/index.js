const express = require("express");
const cors = require("cors");
const { isFailed, isSuccess } = require("./utils/response");
const app = express();
app.use(cors());

const PORT = 3000;

app.get("/", (request, response) => {
  const data = {
    isRunning: true,
    serverVersion: "1.0.2",
  };
  isSuccess(response, 200, data, "success creating a server");
  console.log("Hit By Matz");
});

app.use((request, response, next) => {
  isFailed(
    response,
    403,
    "Forbidden: You do not have access to this resource."
  );
});

app.listen(PORT, () => {
  console.log("Server Running on http://localhost:" + PORT);
});
