import React from 'react';

import {
    HashRouter as Router,
// BrowserRouter as Router,
    Redirect,
    Route,
    Link
} from 'react-router-dom'

import NewsDetail from "./News/Detail"
import NewsList from "./News/List"
import ProductList from "./Product/List"

import Login from "./User/Login"
import Index from "./Index"

import Passport from "./User/Passport";

let passport = new Passport();

/**
 * 路由
 */
export default class MyRouter extends React.Component
{
    render()
    {
        return <Router>
            <div>
                <Route exact path="/" component={Index}/>
                <Route exact path="/news" component={NewsList}/>
                <Route exact path="/news/:index" component={NewsDetail}/>
                <Route exact path="/login" render={(props)=>{
                    //使用es2015的对象解构方式传入props
                    return <Login passport={passport} {...props} />
                }
                }/>

                <Route exact path="/products" render={(props)=> {
                    if (passport.islogin) //已经登录
                    {
                        return <ProductList {...props}/>
                    }
                    else//没有
                    {
                        return <Redirect to="/login"/>
                    }
                }
                }/>
            </div>
        </Router>

    }
}
/*
exact 地址path完全匹配

HashRouter:支持刷新
BrowserRouter:h5方式

*/
