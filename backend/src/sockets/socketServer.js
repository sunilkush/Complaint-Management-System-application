export const initSocket = (io) => {
  io.on('connection', (socket) => {
    socket.on('join-user-room', (userId) => socket.join(`user:${userId}`));
    socket.on('disconnect', () => {});
  });
};
