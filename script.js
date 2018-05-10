var myVar;
function startClock(){
	clearInterval(myVar)
	myVar = setInterval(timer, 1000)
}

const times = [1200, 300, 1200, 300, 1200, 900]
const statuses = ["Work", "Break", "Work", "Break", "Work", "Extended Break"]

var step = 0
var seconds = times[step]

function timer(){
		document.body.style.backgroundColor = "lightgreen"
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
			moveTimer()
		}
}

function pauseTimer(){
	document.body.style.backgroundColor = "lightblue"
	clearInterval(myVar)
}

function moveTimer(){
	document.getElementById("status").innerHTML = statuses[step]
	document.body.style.backgroundColor = "red"
	clearInterval(myVar)
	seconds = times[step]
	document.getElementById("minutes").innerHTML = Math.floor(seconds/60)
	document.getElementById("seconds").innerHTML = seconds%60
}

function resetTimer(){
	document.body.style.backgroundColor = "red"
	clearInterval(myVar)
	step = 0
	seconds = times[step]
	document.getElementById("status").innerHTML = statuses[step]
	document.getElementById("minutes").innerHTML = Math.floor(seconds/60)
	document.getElementById("seconds").innerHTML = seconds%60
}