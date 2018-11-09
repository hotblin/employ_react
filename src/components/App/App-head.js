import React,{Component} from 'react';



export default class AppHeader extends Component{
  render(){
    const title="HOC(Higher-Order Components)，React高阶组件和FaCC(Function as Child Component)函数作为子组件"
    return (
       <header className="App-header">
          <a href="/demo1" title={title}>HOC和FaCC/Render Props</a>
          <a href="/demo2" title='父子组件传值'>父子组件传值</a>
          <a href="/demo3" title='redux传值更改'>redux的使用</a>
        </header>
        
    )
  } 
}