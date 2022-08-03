function CalculateArea() {
	let radius = document.getElementById('txtRadius').value;
	document.getElementById("result").innerHTML = `Area = ${Math.pow(radius, 2) * Math.PI}`;
}