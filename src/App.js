import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container,Image } from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';
import Home from './pages/home';
class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" exact to="/contacts/home">
          <Image  src='http://localhost:3000/Swashbuckler_Logo.png'width="25" height="25"/>
            ﻿Ｈｏｍｅ</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/">
          <Image  src='http://localhost:3000/0LX6b0P.png'width="25" height="25"/>
          ﻿Ｃｏｎｔａｃｔｓ  Ｌｉｓｔ</NavLink>

          <NavLink className="item" activeClassName="active" exact to="/contacts/new">
          <Image  src='http://localhost:3000/Summoner_Logo.png'width="25" height="25"/>
          ﻿Ａｄｄ  Ｃｏｎｔａｃｔ</NavLink>
        </div>
        <Route exact path="/" component={ContactListPage}/>
        <Route path="/contacts/home" component={Home}/>
        <Route path="/contacts/new" component={ContactFormPage}/>
        <Route path="/contacts/edit/:_id" component={ContactFormPage}/>

          <div style={{marginTop:"2em",textAlign:"center"}} className="ui container " >
              Nantipat Software Engineer PSU . GNU LICENSE
              05/01/2018.
          </div>
    
      </Container>
    );
  }
}

export default App;
