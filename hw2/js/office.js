
function CalculateArea() {

	const MAX_VALUE = 1000;

	const office = {
		H: document.getElementById('H').value,
		L: document.getElementById('L').value,
		W: document.getElementById('W').value,
	}

	const banksPaint = {
		banks: 0,
	}

	if ((office.H <= MAX_VALUE) && (office.L <= MAX_VALUE) && (office.W <= MAX_VALUE)) {
		banksPaint.banks = (2 * (office.H * office.L) + 2 * (office.W * office.H)) / 16;
		banksPaint.banks = `${Math.ceil(banksPaint.banks)} cans of paint.`;
	} else {
		banksPaint.banks = "We don't do that.";
	}

	document.getElementById("result").innerHTML = banksPaint.banks;
}