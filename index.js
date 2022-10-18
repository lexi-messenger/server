import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log("connection established")
    console.log("sent hi")
    ws.send('hi');
    ws.terminate();
});

ws.on('message', (data) => {
    console.log('received: %s', data);
});