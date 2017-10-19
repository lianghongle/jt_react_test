import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Router from './components/Router'
import Children from "./components/Children";

class App extends Component {
    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Children>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </Children>

                <hr/>

                <Router/>

            </div>
        );
    }
}

export default App;
