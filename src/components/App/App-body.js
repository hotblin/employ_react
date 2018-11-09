import React,{Component} from 'react';
import {Router} from 'react-router';
import {Route ,  Switch , Redirect} from 'react-router-dom';
import history from '../../utils/history';

import Demo1 from '../../views/Demo1/Demo1';
import Demo2 from '../../views/Demo2/Father/Father';
import Demo3 from '../../views/Demo3';
export default class AppBody extends Component{
  render(){
    return (
      <div className="demo-body">     
        <Router history={history}>
          <Switch>
            <Redirect from='/' exact to='/demo1' />
            <Route path='/demo1' component={Demo1} />
            <Route path='/demo2' component={Demo2} />
            <Route path='/demo3' component={Demo3} />
          </Switch>                    
        </Router>   
       </div>          
    )
  }
}