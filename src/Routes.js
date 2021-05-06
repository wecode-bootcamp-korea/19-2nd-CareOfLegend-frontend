import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main/Main';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import ProductList from './Pages/ProductList/ProductList';
import Quiz from './Pages/Quiz/Quiz';
import Greeting from './Pages/Quiz/Greeting';
import QnATemplate from './Pages/Quiz/QnATemplate';
import Result from './Pages/Quiz/Result';
import Signup from './Pages/Signup/Signup';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/productlist" component={ProductList} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/quiz/hi" component={Greeting} />
          <Route exact path="/quiz/tem" component={QnATemplate} />
          <Route exact path="/quiz/result" component={Result} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
