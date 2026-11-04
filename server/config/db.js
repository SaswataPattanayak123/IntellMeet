
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 15000,
    });

    console.log("MongoDB connected successfully");

  } catch (error) {
    console.error("MongoDB connection failed!");
    console.error("Error:", error.message);

    if (error.reason && error.reason.servers) {
      for (const [address, server] of error.reason.servers) {
        console.error("\nServer:", address);
        console.error("Server Type:", server.type);
        console.error("Server Error:", server.error);
      }
    }

    process.exit(1);
  }
};

module.exports = connectDB;
