import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log("connection established")
    console.log("sending message every 5 seconds")
    setInterval(() => {
        ws.send(`message from client 2 at ${new Date()}`);
    }, 5000);
});

ws.on('message', (data) => {
    console.log('received: %s', data);
});