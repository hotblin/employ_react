import React, {
  Component
} from 'react';
import Son from '../Son/Son';
import '../demo2.css';


function  deletelast(arr){
  return arr.slice(0,arr.length-1);
}
export default class Father extends Component {
  state = {
      countArray: [1, 2, 3],
      count:0,
      toggle:true,
      childInstence:{}
  }
  btnStyle = {
    marginRight:"10px",
    marginBottom:"20px" 
  }
  addCount(){
   this.setState({count: this.state.count + 1}); 
  }
  recudeCount(){
    this.setState({count: this.state.count-1}); 
  }

  addArr(){
    let that = this;
    let random = Math.random().toFixed(1) * 100;
    that.setState({countArray: [...that.state.countArray,random]}); 
  }

  recudeArr(){
    let that = this;
    that.setState({countArray: deletelast([...that.state.countArray])});
  }

  // 子组件mounte后将实例传回给这个函数
  getChildInstence(child){
    this.childInstence = child;
  }

  // 调用子组件方法
  childEvent(){
   this.childInstence.alertThing('hello son');
  }

  fatherThing(mes){
    alert('我是父组件，子组件调用我,并且对我说' + mes);
  }

  changeToggle(){
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
      // return <div>{this.state.comments.map((comment) => (
      //     <Comment comment={comment} key={comment.id} />
      //   ))}
      // </div>
      /** 父组件调用子组件方法：通过props给子组件传入一个函数，然后在子组件生命周期的时候，将子组件的
       * this 当做参数传到该函数中，将获取到的子组件的实例绑定到父组件上，然后可以调用
       */
      // console.log(this.props);
      return (
        <div className="demo2">
          <button onClick={()=>{this.addCount()}} style={this.btnStyle}>增加 count</button>
          <button onClick={()=>{this.recudeCount()}}>减少 count</button>
          <br/>
          <button onClick={()=>{this.addArr()}} style={this.btnStyle}>增加 数组</button>
          <button onClick={()=>{this.recudeArr()}}>减少 数组</button>
          <br></br>
          <button onClick={()=>{this.childEvent()}}>调用子组件方法</button>
          {
            this.state.toggle?
            <Son 
            // 下面这个参数是调用子组件的方法,
            /* childInstence={(v)=>{this.getChildInstence(v)}}
              这句话可以理解为 childInstence=(v)=>{this.getChildInstence(v)}
              子组件中 props.childInstence 来调用一个函数，调用时并且将this(子组件实例)
              通过参数的方式传回来，所以我们可以通过这个返回参绑定到父组件的属性上，从而来调用
            子组件中的方法*/
            childInstence={(v)=>{this.getChildInstence(v)}} 

            // 子组件向父组件通讯：子组件主动触发父组件中的方法
            
            /**子组件向父组件通讯，同样也需要父组件向子组件传递 props 进行通讯，
            只是父组件传递的，是作用域为父组件自身的函数，子组件调用该函数，
            将子组件想要传递的信息，作为参数，传递到父组件的作用域中。 */

            // 下面两个是子组件中调用父组件的方法和传参，但是这里有一个区别，这两种方法都可以调用父组件的方法，区别：
            // 这种方式调用，在调用的方法中获取的this实例不是Father组件，而是Son组件的props
            fatherThing={this.fatherThing}

            // 这种调用方式，调用方法中的this还是Father 组件可以修改Father组件的内部状态
            // 子组件要修改父组件的内容，或者调用父组件的方法
            // changeToggle={()=>this.changeToggle()} 可以理解为
            // changeToggle=(str)=>this.changeToggle(str) 子组件中调用的其实是一个函数后在调用内部的函数
            changeToggle={()=>this.changeToggle()}

            // 想子组件中传入 countArray 和 count 两个参数
            countArray={this.state.countArray} 
            count={this.state.count}/>:
            <h2>子组件已经被隐藏<button onClick={()=>this.changeToggle()}>点击打开子组件</button></h2>
          }
        </div>
      )
  }

}