import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';
import HeaderBox from './components/header';
import RightBox from './pages';

const App = () => {
  
  return (
    <BrowserRouter>
        <>
          <HeaderBox />
          <div className="main">
            <Route exact={true}>
              <RightBox />
            </Route>
          </div>
        </>
    </BrowserRouter>
  );
}

export default App;