import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

const app = express();

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
