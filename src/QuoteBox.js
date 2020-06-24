import React, { Component } from "react";
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux'



const quotes = [
    {
      text:
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison",
    },
    {
      text: "You can observe a lot just by watching.",
      author: "Yogi Berra",
    },
    {
      text: "A house divided against itself cannot stand.",
      author: "Abraham Lincoln",
    },
    {
      text: "Difficulties increase the nearer we get to the goal.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      text: "Fate is in your hands and no one elses",
      author: "Byron Pulsifer",
    },
    {
      text: "Be the chief but never the lord.",
      author: "Lao Tzu",
    },
    {
      text: "Nothing happens unless first we dream.",
      author: "Carl Sandburg",
    },
    {
      text: "Well begun is half done.",
      author: "Aristotle",
    },
]



const NEW_QUOTE = 'NEW_QUOTE';
const newQuoteAction = () => {
    return {
        type: NEW_QUOTE
    }
}


const getRandomItem = array => array[Math.floor( Math.random() * array.length )]

const reducer = (state = [], action ) => {
    const randomItem = getRandomItem(quotes);

    switch ( action.type ) {
        case NEW_QUOTE:
            return {
                text: randomItem.text,
                author: randomItem.author
            }
        default: return state;
    }
}

const store = createStore(reducer);




class Presentational extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes
    };

    this.handleNewQuote = this.handleNewQuote.bind(this);
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

    this.props.getNewQuote(this.state)
  }

  handleNewQuote() {
    this.props.getNewQuote(this.state)
  }

  render() {
    return (

        <div id="quote-box">
            <span id="quote-mark">"</span>
          <h3 id="text">{this.props.quotes.text}</h3>

          <p id="author">{this.props.quotes.author}</p>

            <div id="box-buttons">
            <a href="twitter.com/intent/tweet" id="tweet-quote">
                        Tweet Quote
                    </a>

                    <button className="btn" id="new-quote" onClick={this.handleNewQuote}>
                        New Quote
                    </button>
            </div>
         
        </div>

    );
  }
}



const mapStateToProps = ( state ) => {
    return {
        quotes: state
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getNewQuote: function() {
            dispatch(newQuoteAction());
        }
    }
}



const Container = connect( mapStateToProps, mapDispatchToProps)(Presentational);



export default class QuoteBox extends Component {
    render() {
        return (
           <Provider store={store}>
               <Container />
           </Provider>
        )
    }
}
