var httpServer = require("http-server");
var path = require("path");

var appPath = path.join(__dirname, "/");
var server = httpServer.createServer({ root: appPath });
server.listen(3000);
