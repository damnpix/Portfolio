const ct = ["Success is the child of audacity. -Benjamin Disraeli",
            "We do not remember days, we remember moments. -Cesare Pavese",
            "In the  middle  of  difficulty  lies  opportunity. -Albert Einstein",
            "The only thing we have to fear is fear itself. -Franklin D. Roosevelt",
            "Do one thing every day that scares you. -Eleanor Roosevelt",
            "Well done is better than well said. -Benjamin Franklin",
            "It is during our darkest moments that we must focus to see the light. -Aristotle",
            "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",];

 function setRandomQuote() {
    const randomIndex = Math.floor(Math.random() * ct.length);
    const randomQuote = "\" " + ct[randomIndex] + " \""; 

    document.getElementById("quote").textContent = randomQuote;
  }

  window.onload = setRandomQuote;