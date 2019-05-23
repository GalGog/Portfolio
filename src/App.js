import React, { Component } from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Route,  Switch, Link } from 'react-router-dom';

import './App.css';

import BurgerMenu from "./components/BurgerMenu/index";

import LandingPage from './components/Landing page/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Projects from './components/Project/index';
import Resume from './components/Resume/index';

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
