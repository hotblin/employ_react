import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {update_user} from '../../../store/actions/user';

const styleMargin = {
  marginTop:'20px'
}
const Child = ({btnClick,companyInfo}) => {
  
  const changeuserInfo = ()=>{
    let info = {
      id:Math.random()
    }
    btnClick(info)
  }
  return (
    <div className="demo3-child">
      <h3>child组件，在这这里显示企业信息</h3>
      <p style={styleMargin}></p>
      <button onClick={() => changeuserInfo()}>同步修改用户信息</button>
      <br/>
      {
        JSON.stringify(companyInfo)
      }
    </div>
  )
}

Child.propTypes = {
  btnClick: PropTypes.func.isRequired,
  companyInfo: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    companyInfo: state.companyInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    btnClick: val => {
      dispatch(update_user(val))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Child);