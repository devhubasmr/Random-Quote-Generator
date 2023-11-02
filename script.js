// Sample quotes data
const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    }
];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = randomQuote.text;
    document.getElementById("quote-author").textContent = `- ${randomQuote.author}`;
}

// Event listener for the "New Quote" button
document.getElementById("new-quote-button").addEventListener("click", generateRandomQuote);

// Generate a random quote when the page loads
generateRandomQuote();
// ... (previous code)

// Function to read the quote aloud
function readAloud() {
    const quoteText = document.getElementById("quote-text").textContent;
    const utterance = new SpeechSynthesisUtterance(quoteText);
    speechSynthesis.speak(utterance);
}

// Function to copy the quote text to the clipboard
function copyText() {
    const quoteText = document.getElementById("quote-text").textContent;
    const textArea = document.createElement("textarea");
    textArea.value = quoteText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Text copied to clipboard!");
}

// Function to share the quote on Twitter
function shareOnTwitter() {
    const quoteText = document.getElementById("quote-text").textContent;
    const quoteAuthor = document.getElementById("quote-author").textContent;
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + "\n- " + quoteAuthor)}`;
    window.open(twitterURL, "_blank");
}

// Event listeners for the new buttons
document.getElementById("read-aloud-button").addEventListener("click", readAloud);
document.getElementById("copy-text-button").addEventListener("click", copyText);
document.getElementById("share-button").addEventListener("click", shareOnTwitter);

// ... (rest of the code)
