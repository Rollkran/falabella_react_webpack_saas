import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../store';

import Layout from '../components/Layout';
import Renta from '../pages/Renta';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import '../assets/styles/App.scss';
// import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Renta" component={Renta} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
