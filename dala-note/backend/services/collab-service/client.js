import { io } from "socket.io-client";

const socket = io("http://localhost:4005");

socket.on("connect", () => {
  console.log("Connected to server");

  const noteId = "my-test-note";
  socket.emit("join-note", noteId);

  setInterval(() => {
    const content = `Hello from client at ${new Date().toLocaleTimeString()}`;
    socket.emit("note-edit", { noteId, content });
  }, 3000);
});

socket.on("note-update", (content) => {
  console.log("Received note update:", content);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});