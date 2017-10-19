import React from 'react';

/**
 * 点赞
 */
export default class Agree extends React.Component
{
    componentWillReceiveProps(nextProps)
    {
        console.log("原有的:"+this.props.agreeNum+",新的:"+nextProps.agreeNum)
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("原有的:"+this.props.agreeNum+",新的:"+nextProps.agreeNum)
        return true;
        // return false;
    }

    render()
    {
        return <div>
            点赞数：<span>{this.props.agreeNum}</span>
        </div>
    }
}