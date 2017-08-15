var http = require('http');
/*
 * Cache-Control <可缓存性>, <到期>
 * <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control"></a>
 * public - 表明响应可以被任何对象（包括：发送请求的客户端，代理服务器，等等）缓存。
 * private - 表明响应只能被单个用户缓存，不能作为共享缓存（即代理服务器不能缓存它）。
 * no-cache - 强制所有缓存了该响应的缓存用户，在使用已存储的缓存数据前，发送带验证器的请求到原始服务器
 * only-if-cached - 表明如果缓存存在，只使用缓存，无论原始服务器数据是否有更新。
 * 
 * max-age=<seconds> 设置缓存存储的最大周期，超过这个时间缓存被认为过期(单位秒)。与Expires相反，时间是相对于请求的时间。
 * s-maxage=<seconds> 覆盖max-age 或者 Expires 头，但是仅适用于共享缓存(比如各个代理)，并且私有缓存中它被忽略。
 * max-stale[=<seconds>] 表明客户端愿意接收一个已经过期的资源。 可选的设置一个时间(单位秒)，表示响应不能超过的过时时间。
 * min-fresh=<seconds> 表示客户端希望在指定的时间内获取最新的响应。
 */
http.createServer(function (req, res) {
	console.log('未击中缓存 - ', req.url);
	if (req.url === '/index.html') {
		res.end('<script src="/index.js"></script>');
	} else {
		res.setHeader('Cache-Control', 'max-age=5000');
		res.end('Fine!');
	}

}).listen(3000, function () {
	console.log('Its ok!');
});