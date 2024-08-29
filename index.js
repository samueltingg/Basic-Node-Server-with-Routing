const http = require("http");
const fs = require('fs');


function serveFile(filename, response) {
	fs.readFile(filename, function(err, content) {
		if (err) {
			response.statusCode = 404; // OK
			response.setHeader = ('Content-Type', 'text/plain');
			response.end('404 Not Found');
		} else {
			response.statusCode = 200; // OK
			response.setHeader = ('Content-Type', 'text/html');
			response.end(content);
		}
	});
}

const server = http.createServer(function(request, response) {
	
	console.log('Requested URL:' + request.url);
	
	// Server index.html only
	if (request.url == '/') {
		serveFile('./public/index.html', response);
	} else if (request.url == '/about.html') {
		serveFile('./public/about.html', response);
	} else {
		serveFile('./public/404.html', response);
	} 
});


// Start Server
const PORT = 3000;
server.listen({port: PORT, host: 'localhost' }, function() {
	console.log(`Server listening on port ${PORT}!`);
  });