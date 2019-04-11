import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './component/Main';
import { Link } from 'react-router-dom';

import './App.css';
import BurgerMenu from "./component/BurgerMenu";

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
              <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
                  <Navigation >
                    <Link to="/resume">Resume</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                  </Navigation>
                </Header>

                <BurgerMenu/>

                <Content>
                  <div className="page-content" />
                  <Main/>
                </Content>
              </Layout>
            </div>

        );
    }
}

export default App;
