var client_id = 'unqJkETlTOeoWuFz4SMF'
var client_secret = 'VaErlBXLEm'
var fs = require('fs');

module.exports = {

naver_api:function(str){
	console.log(str);
	console.log('naver_api start');

	var api_url = 'https://openapi.naver.com/v1/voice/tts.bin';
	var request = require('request');
	var options = {
	       url: api_url,
	       form: {'speaker':'mijin', 'speed':'0', 'text':'좋은 하루 되세요'},
	       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
        };
	var writeStream = fs.createWriteStream('./tts1.mp3');
	var _req = request.post(options).on('response', function(response) {
        	console.log(response.statusCode) // 200
        	console.log(response.headers['content-type'])
	});
	_req.pipe(writeStream);
}

}
