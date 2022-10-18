import { io } from "socket.io-client";

const socket = io("ws://localhost:8080");
socket.on("connect", () => {
    console.log("connection established")
    setInterval(() => {
        socket.emit("message", `message from client 2 at ${new Date()}`);
    }, 5000);
    console.log("sending message every 5 seconds")
});