import React from 'react';
import {
  withRouter
} from 'react-router';
const handelClick = (history)=>{
  let confirm = window.confirm('确定退出吗')
  if(confirm) history.push('/login')
  else alert('用户取消');
}
function Dialog(props){
  const {children,history} = props;
  return (
    <div className="dialog-body">
      {children}
      <button onClick={()=>{handelClick(history);}}>dialog自带的退出</button>
    </div>
  )
}

export default withRouter(Dialog);