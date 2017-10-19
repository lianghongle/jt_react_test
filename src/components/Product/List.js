import React from 'react';
import axios from "axios"

export default class List extends React.Component
{
    //1。构造函数
    constructor(props)
    {
        super(props)
        console.log("constructor")

        this.loadingSpan = {}

        this.state = {
            list:[]
        }
    }

    //2.首次渲染前执行
    componentWillMount()
    {
        console.log("componentWillMount")

        this.showLoading(true)

        axios.get("http://vm.centos.xmissy_local_yii2_api/test/list",{
            params: {
                type : "product"
            }
        })
            .then((res)=>{

                console.log(res)

                this.setState({
                    list:res.data.data
                })

                this.showLoading(false)

            }).catch((error)=>{
                console.log(error);
            })
    }

    //3.渲染
    render()
    {
        console.log("render")

        console.log(this.state.list)

        return <div>
            <h2>new list</h2>

            <span ref={(span)=>{this.loadingSpan = span}}>加载中。。。</span>

            <ul>
            {this.state.list.map((item, index)=>{
                console.log(item)
                return <li onClick={this.click} key={index}>
                    <div>{item.name}-{item.price}</div>
                    <div>
                        <span>{item.desc}</span>
                    </div>
                </li>
            })}
            </ul>
        </div>
    }

    //4.渲染后执行
    componentDidMount()
    {
        console.log("componentDidMount")
    }

    click()
    {
        alert("click")
    }

    showLoading(isshow)
    {
        let display = isshow ? "block" : "none"

        console.log(this.loadingSpan)

        if(this.loadingSpan.style){
            this.loadingSpan.style.display = display
        }
    }
}