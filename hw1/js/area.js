/*
"Створіть веб-аплікацію, яка питає у користувача радіус кола та видає площу цього кола.

Приклад:

--> 123 
<-- 47529.15525615998

--> 3.09 
<-- 29.996240815740702"

попробывать консольный ввод данны и через форму
*/
function CalculateArea() {
	let radius = document.getElementById('txtRadius').value;
	document.getElementById("result").innerHTML = `Area = ${radius * radius * Math.PI}`;
}