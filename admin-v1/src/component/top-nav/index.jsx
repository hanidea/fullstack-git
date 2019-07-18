import React from 'react';
import {Link} from 'react-router-dom';

class TopNav extends React.Component{
    constructor(props){
        super(props)
    }
    onLogout(){

    }
    render(){
        return (
            <div className="navbar navbar-default top-navbar" role="navigation">
            <div className="navbar-header">
                {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button> */}
                <Link className="navbar-brand" to="/"><b>admin</b>V1</Link>
            </div>

            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                        <i className="fa fa-user fa-fw"></i><span>欢迎，adminV1</span><i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li>
                            <a onClick={()=>{this.onLogout()}}>
                                <i className="fa fa-sign-out fa-fw"></i>
                                <span>退出登录</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        )
    }
}

export default TopNav;