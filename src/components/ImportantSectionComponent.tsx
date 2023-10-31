import React from 'react';
import logo from '../assets/img/logo.png';

const ImportantSectionComponent: React.FC = () => (
  <div className="section-important">
    <h2>Author</h2>
    <p>This page was build by Eduardo Fockink Silva, student of Computer Science at UNIJUí. React and Ionic was used in this project.</p>
    
    <div className="logo-container">
      <img src={logo} alt="Logo UNIJUÍ" width="350px" height="350px"/>
    </div>
  </div>
);

export default ImportantSectionComponent;
