import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HiredPeopleProvider } from './context/HiredPeopleContext';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <HiredPeopleProvider>
        <App />
      </HiredPeopleProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
