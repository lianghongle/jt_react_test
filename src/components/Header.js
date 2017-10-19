import React from 'react';

import logo from './../logo.svg';

import Children from "./Children";

/**
 * 公用头部
 */
export default class Header extends React.Component
{
    render()
    {
        return <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>

            <Children>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </Children>
        </div>
    }
}