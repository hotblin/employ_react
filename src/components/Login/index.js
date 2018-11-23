import React,{Component} from 'react';
import {withRouter} from 'react-router';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class Login extends Component{
  handelSubmit(){
    let userInfo = {};
    sessionStorage.setItem('user',JSON.stringify(userInfo));
    const {history} = this.props;
    history.push('/home/demo4',{
      a:4
    })
  }
  render(){
    console.log('login 组件')
    return(
      <div className="app-login">
        <div className="loginform cf">
            <ul>
              <li>
                <label htmlFor="account">账号</label>
                <input type="text" name="account" placeholder="请输入你的账号..." required={true}/>
              </li>

              <li>
                <label htmlFor="password">密码</label>
                <input type="password" name="password" placeholder="密码..." required={true}/>
              </li>

              <li>
                <button onClick={()=>{this.handelSubmit()}}>登录</button>
              </li>
            </ul>
        </div>
      </div>
    )
  }
}
// withRouter 组件可以让你的不被route组件包裹的对象可以获取到 props :{match 和 location 和 },
// withRouter 作用是加入组件某个非route包裹组件中要获取路由信息，可以使用 withRouter
const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default withRouter(connect(mapStateToProps)(Login));