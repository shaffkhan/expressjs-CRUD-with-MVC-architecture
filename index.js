const express = require("express");
const userRouter = require("./routes/user");
const connectMongo = require("./connection");
//connection to mongo:
connectMongo("mongodb://127.0.0.1:27017/first-app-with-mongo");
const app = express();
//setting the routes:
app.use("/api/v1/users", userRouter);
//here should be our custom middlewares:
app.use(express.urlencoded({ extended: false }));
//running the server:
app.listen(8000, () => console.log("running on port 8000"));

