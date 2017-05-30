var nictalk = require('nictalk');

module.exports = {
	korean_say:function(str){
		console.log('korean_say in');
		console.log(str);
		var korean = new nictalk({'language' : 'ko','directory' : './korean/'});

		korean.speak('voice',str);
	}
}
