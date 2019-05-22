import React, { Component } from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Route,  Switch, Link } from 'react-router-dom';

import './App.css';

import BurgerMenu from "./components/BurgerMenu";

import LandingPage from './components/LandingPage';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Project';
import Resume from './components/Resume';

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
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/resume" component={Resume} />
                    </Switch>
                </Content>
              </Layout>
            </div>

        );
    }
}

export default App;
