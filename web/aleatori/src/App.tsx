import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes';
import {LoginProvider} from './context/loginContext'

function App() {
  
  return (
    <BrowserRouter>
      <LoginProvider>
          <Routes/>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;