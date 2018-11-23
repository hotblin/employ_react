import React,{Component} from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import {Route ,  Switch , Redirect} from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import history from '../../utils/history';
import store from '../../store'
import './index.css';


class App extends Component {
  render(){
    return(
      <div className="App">
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Redirect from='/' exact to='/home' />
              <Route path='/home' component={Home} />
              <Route path='/login' exact component={Login} />
            </Switch>                    
          </Router> 
        </Provider>
      </div>
    )
  }
}

export default App;