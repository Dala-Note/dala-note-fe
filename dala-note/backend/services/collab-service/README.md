# Collaboration Service

This service handles real-time collaboration on notes using WebSockets.

## Setup

1.  Navigate to this directory: `cd backend/services/collab-service`
2.  Install dependencies: `npm install`
3.  Ensure your Redis connection is properly configured in `src/redis.js`.
4.  Start the service: `npm run dev`

The server will start on the port defined in your environment variables or default to `4005`.

## WebSocket API

The service exposes a WebSocket server for real-time communication.

### Connection

Connect to the WebSocket server at its root URL (e.g., `ws://localhost:4005`).

### Events

The following are the events that the client can emit or listen for:

#### Emitted by Client

##### `join-note`

*   **Description:** Joins a specific note's collaboration room. A client must emit this event before sending or receiving note edits for that note.
*   **Payload:** `noteId` (string) - The unique identifier of the note to join.
*   **Example:**
    ```javascript
    socket.emit("join-note", "my-note-id");
    ```

##### `note-edit`

*   **Description:** Sends updated note content to the server. The server will then broadcast this update to all other clients in the same note room.
*   **Payload:**
    *   `noteId` (string) - The ID of the note being edited.
    *   `content` (string) - The full updated content of the note.
*   **Example:**
    ```javascript
    socket.emit("note-edit", { 
      noteId: "my-note-id", 
      content: "This is the new content."
    });
    ```

#### Received by Client

##### `note-update`

*   **Description:** Receives the updated content of a note from the server.
*   **Payload:** `content` (string) - The full updated content of the note.
*   **Example:**
    ```javascript
    socket.on("note-update", (content) => {
      console.log("Note was updated:", content);
    });
    ```