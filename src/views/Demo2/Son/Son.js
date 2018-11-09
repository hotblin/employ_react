import React ,{Component} from 'react';

export default class Son extends Component{
  spanStyle={
    marginRight:"10px"
  }
  componentDidMount(){
    this.props.childInstence(this);
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

  render() {
    const that = this;
    const {
      countArray,count ,
      changeToggle
    }= this.props;
    return (
      <div className="demo2-son">
      <h2>我是子组件</h2>
      <button onClick={()=>{this.dispatchFatherEvent()}}>调用父组件方法</button><br/>
      <button onClick={()=>{changeToggle()}}>控制自己显示和隐藏</button><br/>
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