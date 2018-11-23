import React,{Component} from 'react';
import {Route ,  Switch,/*Redirect*/} from 'react-router-dom';

import Demo1 from '../../../views/Demo1/Demo1';
import Demo2 from '../../../views/Demo2/Father/Father';
import Demo3 from '../../../views/Demo3';
import Demo4 from '../../../views/Demo4';
export default class AppBody extends Component{
  componentDidMount(){
    console.log('home-body组件，如果检测到登录信息，继续渲染，无登录信息就跳转登录')
  }
  render(){
    const {match} = this.props;
    // console.log(match.path);
    return (
      <div className="home-body">     
         <Switch>
            <Route path={match.path+ "/demo1"} component={Demo1}></Route>
            <Route path={match.path + "/demo2"} component={Demo2}></Route>
            <Route path={match.path + "/demo3"} component={Demo3}></Route>
            <Route path={match.path + "/demo4"} component={Demo4}></Route>
         </Switch>
       </div>          
    )
  }
}
