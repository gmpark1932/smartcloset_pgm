var Gpio = require('onoff').Gpio,
    pir = new Gpio(4, 'in', 'both');
var weather = require('./weather.js');
var say = require('say');
var voice = require('./voice.js');
// exports 안에 코드를 넣어주면 됨
module.exports = {
  motion: function() {
    var motion = false;

	pir.watch(function(err, value) {
 	if (err) exit();
	say.speak('ready');
	console.log('Intruder detecting..');
	if(value == 1) {
          weather.weather('Seoul')
          .then((weatherSpeak) => {
		console.log(weatherSpeak);
		//voice.korean_say(weatherSpeak);
		say.speak(weatherSpeak,'Victoria');		
          
  		isMotion = false;
            	console.log("speak success!!");
            	delay(10000);
          })
        }
	});
	say.speak('ready');
	console.log('Pi Bot deployed successfully!');

	function exit() {
	console.log('sadfasdfsdf');
		    pir.unexport();
			  process.exit();
	}

  function delay(gap){ /* gap is in millisecs */
    var then,now;
    then=new Date().getTime();
    now=then;
    while((now-then)<gap){
      now=new Date().getTime();  // 현재시간을 읽어 함수를 불러들인 시간과의 차를 이용하여 처리
    }
  }



    return motion;  // true 면 모션인식이 된 것으로 판단.
  }
}
