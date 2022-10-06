import React from 'react';
import thinkyblack from './Thinky-black.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.fathym.com/"><img src={thinkyblack} className="thinkyblack" alt="logo" /></a>        
      </header>
      <br />
      <div className="dashboard">
        <iframe title="smart-building-dashboard" className="responsive-iframe" src="https://app.powerbi.com/reportEmbed?reportId=662e0c7f-dd11-492d-aab0-a9235620bc48&autoAuth=true&ctid=6dcbebd0-f8d0-4a9d-89e5-5873e8146b0a" frameBorder="0"></iframe>
      </div>
    </div>
  );
}

export default App;
