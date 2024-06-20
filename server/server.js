require("dotenv").config();
const express = require("express");
const app = express();
const cors=require("cors");
const authRoute = require("./route/auth-route");
const contactRoute =require("./route/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

const corsOptions={
  origin: "http://localhost:5173",
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials:true,
}
app.use(cors(corsOptions));

app.use("/api/auth", authRoute);
app.use("/api/form",contactRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("server is running at port:5000");
  });
});