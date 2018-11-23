import React,{Component} from 'react';
import PropTypes from 'prop-types';

class HomeHeader extends Component{
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  
  render(){
    const {location} = this.props;
    const path = location.pathname;
    // console.log(path);
    const title="HOC(Higher-Order Components)，React高阶组件和FaCC(Function as Child Component)函数作为子组件"
    return (
       <header className="home-header">
          <a href="/home/demo1" title={title} className={`${path.startsWith("/home/demo1")?"current":""}`}>HOC和FaCC/Render Props</a>
          <a href="/home/demo2" title='父子组件传值' className={`${path.startsWith("/home/demo2")?"current":""}`}>父子组件传值</a>
          <a href="/home/demo3" title='redux传值更改' className={`${path.startsWith("/home/demo3")?"current":""}`}>redux的使用</a>
          <a href="/home/demo4" title='react-router以及prop-types' className={`${path.startsWith("/home/demo4")?"current":""}`}>react-router以及prop-types</a>
        </header>
    )
  } 
}


// HomeHeader.

export default HomeHeader;