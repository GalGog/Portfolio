import React, { useState, useContext } from 'react';
import {slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';




class BurgerMenu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
        this.setState({menuOpen: false})
    }



    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu () {
        this.setState({menuOpen: !this.state.menuOpen})
    }


    render () {
        return (
            <div>
                <Menu
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                >
                    <Link id="LandingPage" className="menu-item" to="/"  onClick={() => this.closeMenu()}>Home</Link>
                    <Link id="Resume" className="menu-item" to="/resume" onClick={() => this.closeMenu()}>Resume</Link>
                    <Link id="Aboutme" className="menu-item" to="/about" onClick={() => this.closeMenu()}>About</Link>
                    <Link id="Projects" className="menu-item" to="/projects" onClick={() => this.closeMenu()}>Projects</Link>
                    <Link id="Contact" className="menu-item" to="/contact" onClick={() => this.closeMenu()}>Contact</Link>
                </Menu>
            </div>
        )
    }
}
export default BurgerMenu;