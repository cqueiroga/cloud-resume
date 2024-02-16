const counter = document.querySelector("#count");

async function updateCounter() {
    let response = await fetch("https://gap4zp0djk.execute-api.us-east-1.amazonaws.com/dev");
    let data = await response.json();
    counter.innerHTML = data
}

updateCounter();