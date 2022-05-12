var url = require('url');
var address = 'http://localhost:3000/default.htm/todo?year=2022&month=may';
var paredUrl = url.parse(address, true);

console.log(paredUrl.host);         // localhost:3000
console.log(paredUrl.pathname);     // default.htm/todo
console.log(paredUrl.search);       // ?year=2022&month=may

var qdata = paredUrl.query;
console.log(qdata.month);           // may