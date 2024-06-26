// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file
// when someone visits http://localhost:3000/comments.
// The comments.html file should be served with the correct content type.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('comments.html').pipe(res);
});