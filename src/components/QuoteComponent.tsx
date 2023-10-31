import React, { useState } from 'react';
import { IonButton } from '@ionic/react';

const QuoteComponent: React.FC = () => {
  const [quote, setQuote] = useState<{ content: string, author: string } | null>(null);

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data);
      })
      .catch(error => {
        console.error('Erro na chamada da API:', error);
      });
  };

  return (
    <div>
      <IonButton className="custom-button" expand="block" onClick={fetchQuote}>Reveal Quote</IonButton>
      {quote && 
        <blockquote className="quote">
          <p>{quote.content}</p>
          <footer>{quote.author}</footer>
        </blockquote>
      }
    </div>
  );
};

export default QuoteComponent;
