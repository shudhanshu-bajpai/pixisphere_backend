// api/index.js

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// This is required for Vercel Serverless Functions
module.exports = (req, res) => {
  server(req, res);
};
