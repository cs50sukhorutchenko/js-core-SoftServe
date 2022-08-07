function Calculate() {
	let ticketNum = document.getElementById('txtTicket').value;

	let sumTicketS = (+ticketNum[0]) + (+ticketNum[1]) + (+ticketNum[2]);
	let sumTicketF = (+ticketNum[3]) + (+ticketNum[4]) + (+ticketNum[5]);

	if (sumTicketS == sumTicketF) {
		document.getElementById("result").innerHTML = "You are lucky";
	} else {
		document.getElementById("result").innerHTML = "Not today";
	}
}