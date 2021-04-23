import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';
import HeaderBox from './components/header';
import RightBox from './pages';
import SearchBox from './components/search';

const App = () => {
  return (
    <BrowserRouter>
        <>
          <HeaderBox />
          <br/>
          <SearchBox />
          <div className="page">
            <Route exact={true}>
              <RightBox />
            </Route>
          </div>
        </>
    </BrowserRouter>
  );
}

export default App;