var http = require('http');

http.createServer(function (req, res) {
	console.log('未击中缓存 - ', req.url);
	if (req.url === '/index.html') {
		res.end('<script src="/index.js"></script>');
	} else {
		res.setHeader('Expires', new Date(2022, 9, 1));
		res.end('Fine!');
	}
}).listen(3000, function () {
	console.log('Its ok!');
});