const counter = document.querySelector("#count");

async function updateCounter() {
	let response = await fetch(
		"https://ggwekz8ss0.execute-api.us-east-1.amazonaws.com/prod"
	);
	let data = await response.json();
	counter.innerHTML = data;
}

updateCounter();
