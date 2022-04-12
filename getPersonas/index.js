const { config } = require('dotenv');
const Server = require('./app');

config();

const server = new Server(process.env.PORT_MS_PER);

server.listen();