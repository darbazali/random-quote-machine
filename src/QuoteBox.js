
import React, { useState, useEffect} from 'react'
import defaultQuots from './defaultQuots'

const QuoteBox = () => {

  const getRandomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

  const [quotes, setQuotes] = useState(defaultQuots);
  const [quote, setQuote] = useState( getRandomItem(quotes))

  
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





  




