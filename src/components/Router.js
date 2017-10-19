import React from 'react';

import {
BrowserRouter as Router,
Route,
Link
} from 'react-router-dom'

import NewsDetail from "./News/Detail"
import NewsList from "./News/List"
import ProductList from "./Product/List"

export default class MyRouter extends React.Component
{
    render()
    {
        return  <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/news">新闻列表</Link></li>
                    <li><Link to="/products">商品列表</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={NewsList}/>
                <Route exact path="/products" component={ProductList}/>
                <Route exact path="/news" component={NewsList}/>
                <Route exact path="/news/:newsid" component={NewsDetail}/>
            </div>
        </Router>
    }
}
//exact 地址path完全匹配