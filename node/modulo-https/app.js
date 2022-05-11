const http = require("http");
const {Http25ServerRequest} = require("https");

http.createServer(function(req, ree) {
    res.write("<h1>Este es mi primer servidor en node.js</h1>")
}).listen(3000);