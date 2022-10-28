import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let connections = 0;

wss.on('connection', (ws) => {
    console.log("new connection");
    ws.on('message', (data) => {
        console.log('received: %s', data);
        data = JSON.parse(data.toString());
        if(data?.id < 0) {
            connections++;
            const id = {
                type: "data",
                id: connections,
            }
            ws.send(JSON.stringify(id));
        }
        for(const connection of wss.clients) {
            if(connection != ws){
                const message = {
                    type: "message",
                    message: data.message,
                }
                connection.send(JSON.stringify(message));
            }
        }
        //ws.send(`recieved the message "${data}"`)
    });
});

console.log("server running");
