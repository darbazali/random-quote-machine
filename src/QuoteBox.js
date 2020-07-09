
import React, { useState, useEffect} from 'react'

const QuoteBox = () => {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({text: "Time stays long enough for anyone who will use it.", author: "Leonardo da Vinci"})

  useEffect( () => {
      const url = "https://type.fit/api/quotes";
      fetch( url )
      .then( res => res.json())
      .then( data => setQuotes(data))

  }, [])

    function handleNewQuote() {
        setQuote( getRandomItem(quotes))
    }
      
    
   return (
     <div>
        <h1>{quote.text}</h1>
        <p>{quote.author}</p>
        <button onClick={handleNewQuote}>New Quote</button>
     </div>
   );
}

export default QuoteBox;





  

const getRandomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];


