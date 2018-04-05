function startClock(){
	var myVar = setInterval(timer, 1000)
}

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