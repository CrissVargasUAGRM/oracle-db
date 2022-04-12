const { config } = require('dotenv');
const Server = require('./appMS');

config();

const server = new Server(process.env.PORT_MS_PERSONAS);

server.listen();