import './App.css';
import React, {useEffect,useState} from 'react';

function App() {
  const [quoteIndex, setQuoteIndex] = useState(null)
  const generateIndex = ()=>{
    const randomNumber = Math.floor(Math.random() * 10)
    setQuoteIndex(randomNumber)
    console.log(randomNumber);
    
  }

  useEffect(()=>{
    setQuoteIndex(Math.floor(Math.random() * 10))
  }, [])


  const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" }
  ];
  let url = `https://twitter.com/intent/tweet?hashtags=quotes&text="${encodeURIComponent(quotes[quoteIndex]?.quote)}" ${quotes[quoteIndex]?.author}`
  return (
    <div className="App bg-primary">
      <div id='quote-box' name="wrapper" className='card constainer' >
        <div class="card-body">
          <p id='text'>
            {quoteIndex !== null && quotes[quoteIndex].quote}
          </p>
          <p id='author'>{quoteIndex !== null && quotes[quoteIndex].author}</p>
        </div>
        <div className='d-flex justify-content-between '>
          
          <a id='tweet-quote' href={url} target="_blank">X</a>
          <button id='new-quote' onClick={generateIndex}>New quote</button>
        </div>

      </div>
    </div>
  );
}

export default App;
