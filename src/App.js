import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
    this.quoteGen = this.quoteGen.bind(this)
  }
  
  componentDidMount() {
     this.quoteGen()
  }

  quoteGen() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res =>  res.json())
    .then(data => {
      let arrNum = Math.floor(Math.random() * data.quotes.length);
      this.setState({
        quote: data.quotes[arrNum].quote,
        author: data.quotes[arrNum].author
      })
    })
    .catch(error => console.log(error))
  }
 
  
  render() {
    console.log(this.state.quote)
    return (
    <div id="quote-box">
        <div id="text"><span><i class="fa fa-quote-left"> </i></span> {this.state.quote}</div>
        <div id="author">- {this.state.author}</div>
        <div className="flex">
          <div id="tweetLink"><a href="twitter.com/intent/tweet" id="tweet-quote"><i class="fab fa-twitter"></i></a></div>
          <button id="new-quote" onClick={this.quoteGen}>New Quote</button>
        </div>
        
    </div>
    )
  }
}

export default App;
