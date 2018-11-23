import React ,{Component} from 'react';
import PropTypes from 'prop-types';
export default class Son extends Component{
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  spanStyle={
    marginRight:"10px"
  }
  componentDidMount(){
    console.log(this);
    this.props.childInstence(this);
  }

  // 组件收到传值，组件收到的传值更新
  componentWillReceiveProps(nextProps, nextContext){
    // console.log(nextProps,nextContext);
    // return false;
  }
  

  // 被父组件调用的函数
  alertThing(res){
    alert('我是子组件，我被父组件调用了,并且对我说' + res);
  }

  dispatchFatherEvent (){
    // 子组件调用父组件 直接将要被调用的父组件的函数 通过 props 传入子组件，然后子组件通过this.props来调用
    this.props.fatherThing('hello 父组件');
  }

  // 父组件将父组件的this通过props的方式传入
  changeToggle(fatherInstence){
    console.log(fatherInstence);
  }

  // 更改路由
  changeRouter(){
    console.log(this.context.router.history);
    return false;
    this.context.router.history.push({
      path:"/demo4",
      params:{
        a:1
      }
    });
  }

  render() {
    const that = this;
    const {
      countArray,count ,
      changeToggle /**该函数是子组件调用父组件的方法来更改父组件对子组件的传值 */
    }= this.props;
    // console.log(this.props);
    return (
      <div className="demo2-son">
      <h2>我是子组件</h2>
      <button onClick={()=>{this.dispatchFatherEvent()}}>调用父组件方法</button><br/>
      <button onClick={()=>{changeToggle()}}>控制自己显示和隐藏</button><br/>
      <button onClick={()=>{this.changeRouter()}}>跳转路由到demo4</button>
        {
          countArray.map((t,i)=>(
            <span key={i} style={that.spanStyle}>数组元素{t}</span>
          ))
        }
        <p>count现在是{count}</p>
      </div>
    )
  }
}