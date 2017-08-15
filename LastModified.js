var http = require('http');

http.createServer(function (req, res) {
	console.log('未击中缓存 - ', req.url);
	if (req.url === '/index.html') {
		res.end('<script src="/index.js"></script>');
	} else {
		var ifModifySince = req.headers['if-modified-since'];
		console.log(ifModifySince)
		var diffTime = Date.now() - new Date(ifModifySince).getTime();

		if (diffTime > 1000) {
			res.statusCode = 304;
			res.end('');	
		} else {
			res.setHeader('Last-Modified', 'Tue, 15 Aug 2017 11:53:24 GMT');
			res.end('Fine!');	
		}
	}
}).listen(3000, function () {
	console.log('Its ok!');
});