import express from 'express';
import serverless from 'serverless-http';

// Your existing Express app
import app from '../index.js';

const server = express();
server.use('/.netlify/functions/server', app);  // path must route to lambda

module.exports.handler = serverless(server);