import React, { useState, useContext } from 'react';
import {slide as Menu } from 'react-burger-menu';
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
                    <a id="LandingPage" className="menu-item" href="/"  onClick={() => this.closeMenu()}>MyPortfolio</a>
                    <a id="Resume" className="menu-item" href="/Resume" onClick={() => this.closeMenu()}>Resume</a>
                    <a id="Aboutme" className="menu-item" href="/Aboutme" onClick={() => this.closeMenu()}>About me</a>
                    <a id="Projects" className="menu-item" href="/Projects" onClick={() => this.closeMenu()}>Projects</a>
                    <a id="Contact" className="menu-item" href="/Contact" onClick={() => this.closeMenu()}>Contact</a>

                </Menu>
            </div>
        )
    }
}
export default BurgerMenu;