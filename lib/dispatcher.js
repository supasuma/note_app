var fs = require('fs');

exports.dispatch = function(req, res) {
  var _serverError = function(code, content){
    res.writeHead(code, {'Content-Type': 'text/plain'});
    res.end(content);
  };

  var _renderHTML = function(content){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(content, 'utf-8');
  };

  if (req.url == '/'){
    fs.readFile('./views/index.html', function(error, content){
      if (error){
        _serverError(500);
      } else {
        _renderHTML(content);
      }
    });
  }

};
