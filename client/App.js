import React, {Fragment} from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/Store';

import Header from './components/Header/Header'
// import CreateTopic from './collection/CreateTopic/CreateTopic'
import Login from './containers/Auth/Login/Login'
import SignUp from './containers/Auth/Account/CreateAccount'
import CreateTopic from './containers/CreateTopic/CreateTopic'


import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

function App() {
    return (
        <Provider store={store}>
              <Router history={history}>
                  <Fragment>
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <CreateTopic />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <SignUp />
                        </Route>
                        <Route exact path="/create-topic">
                            <CreateTopic/>
                        </Route>
                    </Switch>
                  </Fragment>
              </Router>
        </Provider>
    );
}

export default App;
