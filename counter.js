var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
    if(request.url === '/favicon.ico'){
        console.log('favicon');
        return;
    }
	console.log('New connection'+request.url);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!, Welcome to Suresh Yadav Portal\n');
    response.write('We have had '+userCount+' visits!\n');
    userCount++;
    response.end();
}).listen(8080);

console.log('Server started');