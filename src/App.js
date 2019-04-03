import React, { Component, Fragment } from 'react';
import './App.css';
import { Header, Menu, DropdownMenu, Segment, } from 'semantic-ui-react';

import Main from './component/Main';
import { Link } from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Fragment >
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Menu>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Menu>
          </Header>

          <DropdownMenu title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Menu>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Menu>
          </DropdownMenu>

          <Segment>
            <div className="page-content" />
            <Main/>
          </Segment>

        </Fragment>
      </div>
    );
  }
}

export default App;
