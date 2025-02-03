import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Database connected");
    });

    connection.on("error", () => {
      console.log("Mongodb connection error");
      process.exit();
    });
  } catch (error) {
    console.error(`Database connection failed ${error}`);
  }
}
