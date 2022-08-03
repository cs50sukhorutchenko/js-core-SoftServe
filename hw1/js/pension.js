/*
"Створіть веб-аплікацію, яка питає у користувача його вік та виводить: 
скільки йому залишилось до пенсії та в якому році вона настане.

Приклад:

--> 30
<-- 35, 2057

--> 1
<-- 64, 2086"
*/

const WORK_YEARS = 65;
function CalculatePension() {
	let currentYear = new Date().getFullYear();
	let personYears = document.getElementById('txtYears').value;
	let yearPension = currentYear - personYears + WORK_YEARS;
	// let yearsToPension = yearPension - currentYear;

	document.getElementById("result").innerHTML = `${yearPension - currentYear}, ${yearPension}`;
}