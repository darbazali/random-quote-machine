import React, { useState, useEffect } from "react";

import { render } from "react-dom";
import QuoteBox from "./QuoteBox";
import defaultQuots from "./defaultQuots";

const App = () => {
  const getRandomItem = (array) =>
    array[Math.floor(Math.random() * array.length)];

  const [quotes, setQuotes] = useState(defaultQuots);
  const [quote, setQuote] = useState(getRandomItem(quotes));

  useEffect(() => {
    const url = "https://type.fit/api/quotes";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  function handleNewQuote() {
    setQuote(getRandomItem(quotes));
  }

  const { text, author } = quote;

  return (
    <div>
      <QuoteBox text={text} author={author} handleNewQuote={handleNewQuote} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
