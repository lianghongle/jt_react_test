import React from 'react';

import {
HashRouter as Router,
// BrowserRouter as Router,
Route,
Link
} from 'react-router-dom'

import NewsDetail from "./News/Detail"
import NewsList from "./News/List"
import ProductList from "./Product/List"

import Login from "./User/Login"
import Index from "./Index"

export default class MyRouter extends React.Component
{
    render()
    {
        return <Router>
            <div>
                <Route exact path="/" component={Index}/>
                <Route exact path="/products" component={ProductList}/>
                <Route exact path="/news" component={NewsList}/>
                <Route exact path="/news/:index" component={NewsDetail}/>
                <Route exact path="/login" component={Login}/>
            </div>
        </Router>

    }
}
/*
exact 地址path完全匹配

HashRouter:支持刷新
BrowserRouter:h5方式

*/
