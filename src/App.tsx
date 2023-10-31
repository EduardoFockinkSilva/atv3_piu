import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import IntroductionComponent from './components/IntroductionComponent';
import ImportantSectionComponent from './components/ImportantSectionComponent';
import { IonContent, IonPage, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const MyApp: React.FC = () => (
  <div className="site-wrapper">
    <IonPage>
      <HeaderComponent />
      <IonContent className="ion-padding">
        <IntroductionComponent />
        <ImportantSectionComponent />
      </IonContent>
    </IonPage>
  </div>
);

export default MyApp;