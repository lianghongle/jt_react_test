import React from 'react';
import axios from "axios"
import Agree from "./Agree"

export default class Detail extends React.Component
{
    //1。构造函数
    constructor(props)
    {
        super(props);

        this.state={
            detail:{},
            agreeNum:0
        }
    }

    agreeSubmit(obj)
    {
        this.setState({
            agreeNum: ++this.state.agreeNum
        })
    }

    //2.首次渲染前执行
    componentWillMount()
    {
        axios.get("http://vm.centos.xmissy_local_yii2_api/test/detail")
            .then((res)=>{

                console.log(res)

                this.setState({
                    detail:res.data.data
                })

                this.showLoading(false)

            }).catch((error)=>{
            console.log(error);
        })
    }

    render()
    {
        return <div>
            <div>标题：{this.state.detail.title}</div>
            <div>描述：{this.state.detail.desc}</div>
            <Agree agreeNum={this.state.agreeNum} />
            <input type="button" value="我要点赞" onClick={()=>{
                this.agreeSubmit(this)
            }} />
        </div>
    }
}