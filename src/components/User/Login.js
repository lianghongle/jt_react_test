import React from 'react';
import axios from "axios"

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

                }
                }>登录
                </button>

            </div>

        </div>
    }

    setUserInfo(event, key)
    {
        let obj = {};
        obj[key] = event.target.value
        this.setState(obj);
    }
}