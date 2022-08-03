const WORK_YEARS = 65;
function CalculatePension() {
	let currentYear = new Date().getFullYear();
	let personYears = document.getElementById('txtYears').value;
	let yearPension = currentYear - personYears + WORK_YEARS;
	// let yearsToPension = yearPension - currentYear;

	document.getElementById("result").innerHTML = `${yearPension - currentYear}, ${yearPension}`;
}