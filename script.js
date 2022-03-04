// Get Quotes from API

let apiQuotes = [];

async function getQuotes() {
	const apiUrl = "https://type.fit/api/quotes";
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		const fullQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
		document.getElementById("quote").innerText = fullQuote.text;
		document.getElementById("author").innerText = fullQuote.author;
	} catch (error) {
		// Catch Error here
	}
}

// On Load
let newQuote = document.getElementById("new-quote");
newQuote.addEventListener("click", (Event) => getQuotes());
