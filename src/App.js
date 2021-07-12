import React from 'react';
import { Route, Switch, BrowserRouter  } from 'react-router-dom';
import Header from './components/header';
import Search from './components/search';
import Content from './components/content';
import CardInfo from './components/card_info';

const App = () => (
  <div className="wrapper">
    <BrowserRouter>  
        <Header />
        <Search />
        <Switch>
          <Route exact path='/' component={Content}/>
          <Route exact path='/film/:id' component={CardInfo} />
        </Switch>
    </BrowserRouter>
  </div>
);

export default App;
