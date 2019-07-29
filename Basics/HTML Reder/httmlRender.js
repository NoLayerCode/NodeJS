var http = require('http');

function onRequest(req, res) {
    res.writeHead(200, { 'content-Type': 'text/plain' });
    res.write('Hello World');
    res.end();
}

http.createServer(onRequest).listen(8000);