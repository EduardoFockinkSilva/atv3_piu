import React from 'react';
import { IonText } from '@ionic/react';
import QuoteComponent from './QuoteComponent';

const IntroductionComponent: React.FC = () => (
  <div className="section-introduction">
     <h2>Quote</h2>
    <p>
    <IonText>
    Welcome to Echoes of Eloquence! Discover timeless wisdom with just a click. Press the button below to unveil a quote for your day.
    </IonText>
      <QuoteComponent />
    </p>
  </div>
  );

export default IntroductionComponent;