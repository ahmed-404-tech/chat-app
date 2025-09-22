const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const helmet = require("helmet");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

const PORT = process.env.PORT || 4000

const httpServer = createServer(app);

connectDB();

app.use("/auth", userRoutes);

httpServer.listen(PORT, () => console.log(`The server is listening on port: ${PORT}`));