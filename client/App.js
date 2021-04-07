import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/Store';

import Header from './components/Header/Header'
import CreateTopic from './collection/CreateTopic/CreateTopic'

import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <BrowserRouter>
              <Router history={history}>
                  <Switch>
                      <Route path="/">
                          <CreateTopic />
                      </Route>
                  </Switch>
              </Router>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
