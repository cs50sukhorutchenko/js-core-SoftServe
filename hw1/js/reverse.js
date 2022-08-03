function ReverseNum(num = document.getElementById('txtNumber').value) {
	document.getElementById("result").innerHTML = num.split("").reverse().join("");
}
