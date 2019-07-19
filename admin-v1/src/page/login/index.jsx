import React from 'react';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
import './index.scss';

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
        // console.log(inputName,inputValue)
        this.setState({
            [inputName] : inputValue
        });
    }
    //用户提交表单
    onSubmit(){
        _mm.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: {
                username : this.state.username,
                password : this.state.password
            }
        }).then((res)=>{

        },(err)=>{

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
                            <div>
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
                                <button
                                    className="btn btn-lg btn-primary btn-block"
                                    onClick={e => {this.onSubmit(e)}}>登录</button>
                            </div>
                        </div>
                    </div>
                </div>
            
        );
    }
}
export default Login;