import React, { useState, useEffect } from "react";

import { render } from "react-dom";
import QuoteBox from "./QuoteBox";
import defaultQuots from "./defaultQuots";
import background from './styles'

const App = () => {
  const getRandomItem = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const [quotes, setQuotes] = useState(defaultQuots);
  const [quote, setQuote] = useState(getRandomItem(quotes));
  const [randomBgColor, setRandomBgColor] = useState(getRandomItem(background))
  useEffect(() => {
    const url = "https://type.fit/api/quotes";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  function handleNewQuote() {
    setQuote(getRandomItem(quotes));
    setRandomBgColor(getRandomItem(background))
  }

  const { text, author } = quote;
  return (
    <div id="app" style={randomBgColor}>
      <QuoteBox 
        bg_color={randomBgColor}
        text={text} 
        author={author} 
        handleNewQuote={handleNewQuote} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
