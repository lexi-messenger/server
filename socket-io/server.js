import { Server } from "socket.io";

const io = new Server({
    /* options */
});

const connections = [];

io.on("connection", (socket) => {
    connections.push(socket);
    socket.on("message", (message) => {
        console.log(`message: ${message}`)
    })
});

io.listen(8080);
console.log("server running");
