import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

import data from './data.json';
import Quote from './components/Quote';
import Form from './components/Form';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
    const [quote, setQuote] = useState(data[9]);
    const [quotesList, setQuotesList] = useState(data);

    const handleDelete = (id) => {
      const newQuotesList = quotesList.filter(quote => quote.id !== id)
      setQuotesList(newQuotesList)
    }

    const handleAdd = (quote) => {
      const id = new Date().getTime();
      setQuotesList([...quotesList, {...quote, id}])
    }

    const setRandomQuote = () => {
        const randomNumber = Math.floor(Math.random() * data.length);
        setQuote(data[randomNumber]);
    };

    useEffect(() => {
      if (quotesList.length < 0) {
        async function fetchData() {
          try {
            const response = await fetch('http://localhost:3000/quotes');
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        }
      }
    }, [quotesList])

    return (
        <>
            <Header />

            <main>
                {/* Form */}
                <Form handleAdd={handleAdd}/>

                {/* Selected quote */}
                <Quote quote={quote.quote} author={quote.author} />

                {/* Quotes cards */}
                {quotesList.map((quote) => (
                  <Card key={quote.id} quote={quote.quote} author={quote.author}
                  handleDelete={() => {handleDelete(quote.id)}}/>
                ))}
            </main>

            <Footer text="Mi App de quotes!" />
        </>
    );
}

export default App;
