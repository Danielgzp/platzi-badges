import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Badges from '../containers//Badges';
import BadgeNew from '../containers/BadgeNew';
import NotFound from '../containers/NotFound';
import Home from '../containers/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route component={NotFound} />
          </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;