import React ,{Component} from 'react';
import HomeHeader from './components/HomeHeader';
import HomeBody from './components/HomeBody';
import './index.css';
class Home extends Component {
  render(){
    return(
      <div className="home-wrapper">
        <HomeHeader {...this.props}/>
        <HomeBody {...this.props}/>
      </div>
    )
  }
}

export default Home;