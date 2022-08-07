function CalculateArea() {
	let celsius = document.getElementById('txtCelsius').value;
	let fahrenheit = celsius * 9 / 5 + 32;

	if (isNaN(fahrenheit) === false) {
		document.getElementById("result").innerHTML = `Fahrenheit = ${fahrenheit}`;
	} else {
		document.getElementById("result").innerHTML = "Error!!!";
	}
}