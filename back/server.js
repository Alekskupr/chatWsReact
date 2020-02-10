const http = require('http');
const WebSocket = require('ws');
const app = require('./app');

const server = http.createServer(app);
const Port = process.env.PORT || 3100;

server.listen(Port, () => console.log(`сервер работает на ${Port} порту`));

const wss = new WebSocket.Server({
  port: 8080,
  clientTracking: true,
});

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        const msg = JSON.parse(message);
        client.send(JSON.stringify({ message: msg }));
      }
    });
  });
});
