import React from "react";

const QuoteBox = (props) => {
  const { background_color } = props.bg_color;

  return (
    <div id="quote-box">
      <span id="quote-mark">&quot;</span>
      <h3 id="text">{props.text}</h3>

      <p id="author">- {props.author? props.author: "Unknown"}</p>

      <div id="box-buttons">
        <a style={{color: background_color}} href="#" id="tweet-quote">
          Tweet Quote
        </a>

        <button 
          style={{backgroundColor: background_color}}
          className="btn" 
          id="new-quote" 
          onClick={props.handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
