import http from 'http';
import { Server } from 'socket.io';
import { app } from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';
import { initSocket } from './sockets/socketServer.js';

const bootstrap = async () => {
  await connectDB();
  const server = http.createServer(app);
  const io = new Server(server, { cors: { origin: env.clientOrigin, credentials: true } });
  initSocket(io);
  server.listen(env.port, () => console.log(`Server running on ${env.port}`));
};

bootstrap();
