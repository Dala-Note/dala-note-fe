export const setupCollabSockets = (io, redis) => {
  io.on("connection", (socket) => {
    console.log("🟢 Connected:", socket.id);

    socket.on("join-note", (noteId) => {
      socket.join(noteId);
      console.log(`📄 User joined note ${noteId}`);
    });

    socket.on("note-edit", async ({ noteId, content }) => {
      // Save note temporarily in Redis
      await redis.set(`note:${noteId}`, content);

      // The adapter will broadcast this to all other clients in the room,
      // including those on other nodes.
      socket.to(noteId).emit("note-update", content);
    });

    socket.on("disconnect", () => {
      console.log("🔴 Disconnected:", socket.id);
    });
  });
};