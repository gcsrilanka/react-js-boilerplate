import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import BodyPage from './components/body/BodyPage';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NotFound from './components/notFound/NotFound';

class App extends Component {
  render() {
    return (
      <div>

        <Header />

        <BrowserRouter>
          <Switch>
            <Route path="/" component={BodyPage} exact />
            <Route path="/404" component={NotFound} exact />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;

