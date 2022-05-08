const http = require('http');
const dt = require('./myModule.js');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-Type': 'text/html'})
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(port);