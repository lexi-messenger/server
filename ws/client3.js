import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log("connection established")
    console.log("sent message")

    //Message format:
    /* type: "message",
        userSent: userSent,
        userReceiving: userReceiving,
        timeSent: timeSent,
        message: data.message,
        id: userSent's id
    */

    ws.send(JSON.stringify({type: "message", userSent:"Philipp", timeSent: Date.now() - 10000, inOrOutbound: "out", userReceiving:"Lewis", id:0, message: 'Mir geht es gut, diese App ist ziemlich cool'}));
});

ws.on('message', (data) => {
    console.log('received: %s', data);
});