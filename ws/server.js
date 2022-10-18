import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

const connections = [];

wss.on('connection', (ws) => {
    connections.push(ws);
    console.log("new connection");
    ws.on('message', (data) => {
        console.log(connections.length);
        console.log('received: %s', data);
        for(const connection of connections) {
            if(connection != ws){
                connection.send(data.toString());
            }
            
        }
        //ws.send(`recieved the message "${data}"`)
    });
});

console.log("server running");
