import React from "react";
import { render } from "react-dom";
import QuoteBox from './QuoteBox'

const App = () => {
  return (
    <div>
      <h1>Hello React!</h1>
      <QuoteBox />
    </div>
  );
};

render(<App />, document.getElementById("root"));
