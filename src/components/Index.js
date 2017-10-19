import React from 'react';
import Header from "./Header";
import Menu from "./Menu";

import NewsList from "./News/List";

/**
 * 首页
 */
export default class Index extends React.Component
{
    render()
    {
        return <div>
            <Header/>

            <Menu/>

            <NewsList/>
        </div>
    }
}