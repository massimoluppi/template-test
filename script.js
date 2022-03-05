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

// On Click
let newQuote = document.getElementById("new-quote");
newQuote.addEventListener("click", (Event) => getQuotes());

async function tweetIt() {
	const quote = document.getElementById("quote").innerText;
	const author = document.getElementById("author").innerText;
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
	window.open(twitterUrl, "_blank");
}

const newTweet = document.getElementById("twitter");
newTweet.addEventListener("click", (Event) => tweetIt());
