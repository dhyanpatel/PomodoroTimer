function startClock(){
	var myVar = setInterval(timer, 1000)
}
//var myVar = setInterval(Timer, 1000);
//var work = 1200 //seconds for 20 minutes
//const work = 1200 //seconds for 20 mins
//const rest = 300 //seconds for 5 mins
//const longrest = 900 //seconds for 15 mins

const times = [1200, 300, 1200, 300, 1200, 900]

var step = 0
var seconds = times[step]

function timer(){
		document.getElementById("minutes").innerHTML = Math.floor(seconds/60)
		document.getElementById("seconds").innerHTML = seconds%60
		seconds--
		if (seconds == 0){
			if (step == 5){
				step = 0
			}
			else{
				step++
			}
			seconds = times[step]
		}
}