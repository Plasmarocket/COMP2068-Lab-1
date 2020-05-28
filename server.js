'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
const hostname = '127.0.0.1';

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
}).listen(port);

    console.log(`Server running at http://${hostname}:${port}/`);
