import React from 'react'
// import axios from "axios"

import Passport from './Passport'

export default class Login extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state={
            userName:"",
            userPass:""
        };
    }

    render()
    {
        return <div>
            <h3>这是登录界面</h3>
            <div>
                <span>用户名:</span>
                <span>
                    <input type="text" onChange={(event) => {
                        this.setUserInfo(event, "userName")
                        }
                    }/>
                </span>
            </div>

            <div>
                <span>密  码:</span>
                <span>
                    <input type="password" onChange={(event) => {
                        this.setUserInfo(event, "userPass")
                        }
                    }/>
                </span>
            </div>

            <div>
                <button onClick={() => {
                    // let passport = new Passport()
                    let passport = this.props.passport == null ?
                        new Passport() : this.props.passport;

                    passport.login(this.state.userName, this.state.userPass, ()=>{
                        this.props.history.push("/products");
                    })
                }
                }>登录
                </button>

            </div>

        </div>
    }

    setUserInfo(event, key)
    {
        let obj = {};
        obj[key] = event.target.value//（event.target）标签的值（.value）
        this.setState(obj);

        console.log(this.state)
    }
}