var http = require('http');

http.createServer(function (req, res) {
	console.log('未击中缓存 - ', req.url);
	if (req.url === '/index.html') {
		res.end('<script src="/index.js"></script>');
	} else {
		var ifNoneMatch = req.headers['if-none-match'];

		if (ifNoneMatch === 'x6as7a8sasasa') {
			res.statusCode = 304;
			res.end('');	
		} else {
			res.setHeader('ETag', 'x6as7a8sasasa');
			res.end('Fine!');	
		}
	}
}).listen(3000, function () {
	console.log('Its ok!');
});