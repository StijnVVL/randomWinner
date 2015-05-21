$(document).ready(function() {
    console.log( "ready!" );


function getRandomArbitrary(min, max) {

	var maxValue = parseInt(document.getElementById('max').value);
		console.log("max value = " + maxValue);

	var minValue = parseInt(document.getElementById('min').value);
		console.log("min value = " + minValue);

	return Math.round( Math.random() * (maxValue - minValue) + minValue); 
}	

$(function () {
	$(".button").click(function() {
		$(".result").html(getRandomArbitrary());
	});		
});
});

// Add logic to get z-amount of random return values between x & y