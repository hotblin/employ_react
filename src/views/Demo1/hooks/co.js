import React,{Component} from 'react';
import Hooks from './hooks';

export default class Co extends Component{
  render(){
    const data = Hooks();
    return (
      <div>{data}</div>
    )
  }
}