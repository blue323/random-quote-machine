import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([])
  const [currentQuote, setCurrentQuote] = useState()
  const [colors, setColors] = useState([
    '#FF024A',
    '#FF7F09',
    '#27AE60',
    '#FF999F',
    '#8E077E',
    '#C0C8DC',
    '#001F3C',
    '#007AFF',
    '#D7BE69',
    '#282828',
  ])
  const [currentColor, setCurrentColor] = useState()

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => setQuotes(data.quotes))
  }, [])

  useEffect(()=>{
		setCurrentQuote(quotes[Math.round(quotes.length * Math.random())]);
    setCurrentColor(colors[Math.round(colors.length * Math.random())]);
    document.body.style.background = currentColor
	}, [quotes, colors])
  

  function handleQuote() {
    setCurrentQuote(quotes[Math.round(quotes.length * Math.random())]);
    setCurrentColor(colors[Math.round(colors.length * Math.random())]);
    document.body.style.background = currentColor
  }

  return (
    <div className="App">
      <div id='quote-box'>
        <h3 id='text'>{currentQuote && currentQuote.quote}</h3>
        <p id='author'>{currentQuote && currentQuote.author}</p>
        <div id='buttons'>
          <button id='new-quote' onClick={handleQuote}>New quote</button>
          {currentQuote && <a id='tweet-quote' href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${currentQuote.quote}"- ${currentQuote.author}`} target='_blank' rel='noreferrer'>tweet quote</a>}
        </div>
      </div>
    </div>
  );
}

export default App;