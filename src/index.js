/* import { Server } from "./app.js";
import { config } from "dotenv"; */

const { config } = require('dotenv');
const Server = require('./app');

config();

const server = new Server(process.env.PORT);

server.listen();