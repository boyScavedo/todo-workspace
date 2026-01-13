import "dotenv/config";
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI, { serve } from "swagger-ui-express";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

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

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use("/api/v1/users", userRoutes);

connectDB().then(() => {
  app.listen(5001, () => {
    console.log("Server is running on port 5001");
  });
});
