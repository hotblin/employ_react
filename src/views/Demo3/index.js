import React ,{Component} from 'react';
import Child from './Child/Child';
import Parent from './Parent/Parent';
import './index.css';
import {filterTime} from '../../filters';
export default class Demo3 extends Component {
  render(){
    return (
      <div className="demo3">
        <h2>{filterTime('demo3')}</h2>
        {filterTime('2018-11-11')}
        <Parent/>
        <Child/>
      </div>
    )
  }
}