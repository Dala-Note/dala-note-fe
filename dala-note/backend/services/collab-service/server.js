import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import { setupCollabSockets } from "./src/socket.js";
import { connectRedis } from "./src/redis.js";
import { createAdapter } from "@socket.io/redis-adapter";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "success", message: "Collab Service Running" });
});

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Connect Redis
const pubClient = await connectRedis();
const subClient = pubClient.duplicate();

// Use Redis adapter for multi-instance sync
io.adapter(createAdapter(pubClient, subClient));

// Setup collaboration sockets
setupCollabSockets(io, pubClient);

const PORT = process.env.PORT || 4005;
server.listen(PORT, () =>
  console.log(`🚀 Collab Service running on port ${PORT}`)
);