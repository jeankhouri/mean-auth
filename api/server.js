import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
dotenv.config();

async function run() {
  const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  };
  const uri = process.env.DBURI;
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    res.status(500).json(error.message);
  }
}
run().catch(console.dir);

const app = express();
app.use(express.json());
app.use(cookieParser());
const port = 6000;

app.listen(port, () => {
  console.log("server listening on port ", port);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 500;
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
