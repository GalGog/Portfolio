import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link, Switch, Route } from 'react-router-dom';

import './App.css';
import BurgerMenu from "./component/BurgerMenu";

import LandingPage from './component/LandingPage';
import About from './component/About';
import Contact from './component/Contact';
import Projects from './component/Project';
import Resume from './component/Resume';

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
