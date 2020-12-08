import React from 'react';
import Routes from './routes';
import {LoginProvider} from './context/loginContext'

function App() {
  
  return (
    <LoginProvider>
      <Routes/>
    </LoginProvider>
    
  );
}

export default App;