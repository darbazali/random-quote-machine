import React from "react";
import { render } from "react-dom";
import QuoteBox from "./QuoteBox";

const App = () => {
  return (
    <div>
      <QuoteBox />
    </div>
  );
};

render(<App />, document.getElementById("root"));
