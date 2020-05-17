import Server from './Server';

const port = process.env.PORT || 2525;
const server = new Server(port);
server.start();
