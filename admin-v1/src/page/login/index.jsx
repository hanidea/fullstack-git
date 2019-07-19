import React from 'react';
import './index.scss'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }
    }
    //当用户名发生改变
    onInputChange(e){
        let inputValue = e.target.value,
            inputName = e.target.name;
        // console.log(e.target.value)
        console.log(inputName,inputValue)
        this.setState({
            [inputName] : inputValue
        });
    }
    // //当密码发生改变
    // onPasswordChange(e){
    //     console.log(e.target.value)
    //     this.setState({
    //         password : e.target.value
    //     });
    // }
    render(){
        return (
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default login-panel">
                        <div className="panel-heading">欢迎登录-ADMINV1</div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" 
                                        name="username"
                                        className="form-control" 
                                        placeholder="请输入用户名"
                                        onChange={e => this.onInputChange(e)}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" 
                                        name="password"
                                        className="form-control" 
                                        placeholder="请输入密码"
                                        onChange={e => this.onInputChange(e)}
                                        autoComplete="true"/>
                                </div>
                                <button type="submit" className="btn btn-lg btn-primary btn-block">登录</button>
                            </form>
                        </div>
                    </div>
                </div>
            
        );
    }
}
export default Login;