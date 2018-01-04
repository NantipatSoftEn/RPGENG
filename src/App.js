import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';
import Home from './pages/home';
class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" exact to="/contacts/home">﻿Ｈｏｍｅ</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/">﻿Ｃｏｎｔａｃｔｓ  Ｌｉｓｔ</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">﻿Ａｄｄ  Ｃｏｎｔａｃｔ</NavLink>
        </div>
        <Route exact path="/" component={ContactListPage}/>
        <Route path="/contacts/home" component={Home}/>
        <Route path="/contacts/new" component={ContactFormPage}/>
        <Route path="/contacts/edit/:_id" component={ContactFormPage}/>
      </Container>
    );
  }
}

export default App;
