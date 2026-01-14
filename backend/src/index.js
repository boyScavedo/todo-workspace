import "dotenv/config";
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI, { serve } from "swagger-ui-express";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const option = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TODO-WORKSPACE API",
      version: "0.0.1",
      description: "This is a simple API for TODO-WORKSPACE",
    },
    servers: [
      {
        url: "http://localhost:5001",
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/models/*.js"],
};

const swaggerSpec = swaggerJSDoc(option);
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

connectDB().then(() => {
  app.listen(5001, () => {
    console.log("Server is running on port 5001");
  });
});
