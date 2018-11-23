import React, {
  Component
} from 'react';
import './demo4.css';
// import {
//   withRouter
// } from 'react-router';
// import PropTypes from 'prop-types';
import Dialog from './components/Dialog';
class Demo4 extends Component {

  // 通过 props 获取上下文参数，也可以通过 withRouter 包裹该组件来来获取router信息
  // react 官方并不推荐使用context来传递参数，官方建议使用withRouter 来获取history对象来进行路由跳转
  // static contextTypes = {
  //   router: PropTypes.object.isRequired,
  // }
  loginOut(){
    const {history} = this.props;
    history.push('/login');
  }

  // 组件将要加载完成
  componentDidMount(){
    // console.log(this.props);
    const {location} = this.props;

  }

  render(){
    return(
      <div className="demo4-body">
        <h3>demo4</h3>
        <Dialog>
          <h1 className="Dialog-title">
            dialog title
          </h1>
        </Dialog>
        <p>通过 props.chilren 来渲染组件</p>
        <button onClick={()=>this.loginOut()}>登出</button>
      </div>
    )
  }
}

export default Demo4;