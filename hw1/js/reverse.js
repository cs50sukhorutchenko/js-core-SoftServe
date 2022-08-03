/*
	"Запросіть у користувача трицифрове число і виведіть його задом наперед.

Приклад:

--> 321
<-- 123

--> 109
<-- 901"
*/


function ReverseNum(num = document.getElementById('txtNumber').value) {
	document.getElementById("result").innerHTML = num.split("").reverse().join("");
}
