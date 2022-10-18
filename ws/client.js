import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log("connection established")
    console.log("sent message")
    ws.send('message from client 1');
});

ws.on('message', (data) => {
    console.log('received: %s', data);
});