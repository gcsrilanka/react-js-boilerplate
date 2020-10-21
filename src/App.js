import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div>

        <Header />

        <BrowserRouter>
          <Switch>
            {/* <Route path="/" component={HomePage} exact /> */}
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

