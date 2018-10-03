const Hapi = require('hapi');
const socketIo = require('socket.io');

const server = new Hapi.Server({
  port: 9000,
  host: 'localhost',
});

const io = socketIo(server.listener);
io.on('connection', socket => {
  socket.on('newMessage', data => {
    io.emit('broadcast', data);
  });
});

const init = async () => {
  await server.start();
  // eslint-disable-next-line
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', error => {
  // eslint-disable-next-line
  console.log(error);
  process.exit(1);
});

init();
