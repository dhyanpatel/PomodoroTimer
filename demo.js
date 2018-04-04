function demo(seconds){
	var myVar = setInterval(Timer(seconds), 1000)
}
//var myVar = setInterval(Timer, 1000);
//var work = 1200 //seconds for 20 minutes
function Timer(seconds){
	startInterval(function(){
		document.getElementById("minutes").innerHTML = Math.floor(seconds/60)
		document.getElementById("seconds").innerHTML = seconds%60
		seconds--
	}, 100)
}