import express from "express";
import { connectDB } from "./config/db";
import { router } from "./router/router";
import { config } from "dotenv";
import fileUpload from "express-fileupload";
import cors from "cors";

config()

const app = express();
const PORT = process.env.PORT;

app.use(cors())

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connectDB();

app.use("/", router);

app.listen(PORT, () => {
  console.log("Server is up and running " + PORT);
});


