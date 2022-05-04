const express = require("express");
const moongoose = require("mongoose");
require("dotenv").config();
const UserRoutes = require("./routes/users.route");

//server configuration
const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use("/api", UserRoutes);

//routes
app.get("/", (req, res) => {
  res.send("Reporting for duty!");
});

//mongodb connection
moongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

//listen port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
