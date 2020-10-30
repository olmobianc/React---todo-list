import React from "react"
import './App.css';
import logo from './logo.svg';

class Header extends React.Component {
    render() {
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        )
    }
}

export default Header