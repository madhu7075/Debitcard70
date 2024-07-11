let confirm = document.querySelector("#confirm");
let an = document.querySelector("#an");
let n = document.querySelector("#n");
let my = document.querySelector("#my");

confirm.addEventListener("click", () => {
	let cname = document.querySelector("#cardholder").value;

	let cno = document.querySelector("#cardno");
	let mm = document.querySelector("#mm").value;
	let yy = document.querySelector("#yy").value;

	if (cno.value.length == 16) {
		an.innerHTML = cno.value;
		my.innerHTML = `${mm}/${yy}`;
		n.innerHTML = cname;
	} else {
		console.log("hhh", cno.style.border);
		cno.style.border = "1px solid red";
	}
});
