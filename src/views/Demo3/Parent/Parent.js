import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {getCompanyInfo} from '../../../store/actions/company';

class Parent extends Component {
  changeCompanyInfo(){
    let info = {
      id: '010-78',
      name: "baidu",
      buildTim: "2018"
    }
   
    info.buildTim = Math.random();
    this.props.btnClick(info);
  }
  render(){
    const {user} = this.props;
    const styleObject={
      marginBottom:"20px",
      border:'1px solid red'
    }
    return (
      <div style={styleObject}>
        <button onClick={()=> this.changeCompanyInfo()}>异步修改企业信息</button>
        <br/>
        <h3>parent组件，在这显示用户信息</h3>
        {
          JSON.stringify(user)
        }
      </div>
    )
  }
}

// 对于组件的传入值在进行类型强化
Parent.propTypes = {
  btnClick: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    btnClick: (token,info) => {
      dispatch(getCompanyInfo(token,info))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Parent);