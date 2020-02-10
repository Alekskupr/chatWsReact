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

wss.on('connection', (ws, req) => {
  ws.send(JSON.stringify({ connection: 'ура, новый пользователь' }));

  
  ws.on('message', (message) => {
    console.log(message);
    ws.send(JSON.stringify({ res: message }));
  });
});

// const io = socketIo(server);
// io.on('connection', socket => {
//   console.log('Client connected!');
//   socket.on('user: message', msg => {
//     console.log(msg);
//     socket.broadcast.emit('user: message', msg);
//     socket.emit('user: message', msg);
//   });

//   socket.on('user: disconnect', socket.disconnect);

//   socket.emit('server-to-client', 'hello world');
// });
