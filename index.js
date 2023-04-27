const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(bodyParser.json());

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World!!!");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL); // first connecting with database then start the application
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
