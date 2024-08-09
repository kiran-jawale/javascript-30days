const WebSocket = require('ws').WebSocket;
const port = 9000;
const wsserver = new WebSocket.Server({ port: port });

wsserver.on("connection", function connection(ws) {
  console.log(`New client connected`);

  ws.on("message", function incoming(message) {
    console.log("Received %s", message);
    const parsedMessage = JSON.parse(message);

    wsserver.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
      }
    });
  });

  ws.on("close", function close() {
    console.log(`A Client disconnected`);
  });
});

console.log(`Server running on port %s`, port);
