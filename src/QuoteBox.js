import React from "react";

const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <span id="quote-mark">&quot;</span>
      <h3 id="text">{props.text}</h3>

      <p id="author">- {props.author}</p>

      <div id="box-buttons">
        <a href="#" id="tweet-quote">
          Tweet Quote
        </a>

        <button className="btn" id="new-quote" onClick={props.handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
