import { io } from "socket.io-client";

const messages = [];

const socket = io("ws://localhost:8080");
socket.on("connect", () => {

    socket.emit("message", "hello");
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});