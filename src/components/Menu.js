import React from 'react';

import{
    Link
} from 'react-router-dom'

export default class Menu extends React.Component
{
    render()
    {
        return <div className="App-menu">
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/news">新闻列表</Link></li>
                <li><Link to="/products">商品列表</Link></li>
                <li><Link to="/login">登陆</Link></li>
            </ul>
        </div>
    }
}

