import React, { useState } from 'react';
import quotes from '../data.json';
export default function Quote() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const handleRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };
  return (
    <div>
      <blockquote>
        <p>"{currentQuote.quote}"</p>
        <p>-{currentQuote.author}</p>
      </blockquote>
      <button onClick={handleRandomQuote}>Cambiar Quote</button>
    </div>
  );
};
