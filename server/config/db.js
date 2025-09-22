const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000
    });
    console.log("Database connection was successful");
  } catch (error) {
    console.log("An error occurred while trying to connect to the database", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
