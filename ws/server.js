import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    console.log("new connection");
    ws.on('message', (data) => {
        console.log('received: %s', data);
        for(const connection of wss.clients) {
            console.log(`ready state: ${connection.readyState}`);
            if(connection != ws){
                connection.send(data.toString());
            }
            
        }
        //ws.send(`recieved the message "${data}"`)
    });
});

console.log("server running");
