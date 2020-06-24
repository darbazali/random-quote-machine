import React, { Component } from 'react'

export default class QuoteBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            quotes: [
                {
                    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
                    "author": "Thomas Edison"
                  },
                  {
                    "text": "You can observe a lot just by watching.",
                    "author": "Yogi Berra"
                  },
                  {
                    "text": "A house divided against itself cannot stand.",
                    "author": "Abraham Lincoln"
                  },
                  {
                    "text": "Difficulties increase the nearer we get to the goal.",
                    "author": "Johann Wolfgang von Goethe"
                  },
                  {
                    "text": "Fate is in your hands and no one elses",
                    "author": "Byron Pulsifer"
                  },
                  {
                    "text": "Be the chief but never the lord.",
                    "author": "Lao Tzu"
                  },
                  {
                    "text": "Nothing happens unless first we dream.",
                    "author": "Carl Sandburg"
                  },
                  {
                    "text": "Well begun is half done.",
                    "author": "Aristotle"
                  }
            ],
            text: "",
            author: ""
        }

        this.handleNewQuote = this.handleNewQuote.bind(this)
    }

    UNSAFE_componentWillMount() {
        // let jsonData;
        //  fetch("https://type.fit/api/quotes")
        //     .then(function(response) {
        //         return response.json();
        //     })
        //     .then(function(data) {
        //         jsonData = [...data]
        //     });

        const randomIndex = Math.floor( Math.random() * this.state.quotes.length );
        const randomItem = this.state.quotes[randomIndex];
        this.setState(state => ({
            text: randomItem.text,
            author: randomItem.author
        }))

    }

    handleNewQuote() {
        const randomIndex = Math.floor( Math.random() * this.state.quotes.length );
        const randomItem = this.state.quotes[randomIndex];
        this.setState(state => ({
            text: randomItem.text,
            author: randomItem.author
        }))
    }
    
    render() {

       


        return (
            <div id="quote-box">

                <h3 id="text">"{this.state.text}</h3>

                <p id="author">{this.state.author}</p>

                <button id="new-quote" onClick={this.handleNewQuote}>New Quote</button>

                <a href="twitter.com/intent/tweet" id="tweet-quote">Tweet Quote</a>

            </div>
        )
    }
}
