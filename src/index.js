import Server from './Server';

const init = () => {
    const port = process.env.PORT || 7777;
    const server = new Server(port);

    server.start();
};

init();