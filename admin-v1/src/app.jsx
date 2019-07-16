import React from 'react';
import ReactDOM from 'react-dom';

class Child1 extends React.Component{
  constructor(props){
    super(props);
  }
  handleClick(){
    // this.props.bgColor = 'red';
    // this.props.changeColor('red');
    this.props.changeChild2Color('red');
  }
  render(){
      return (
        <div>
          {/* <h1>父组件background:{this.props.bgColor}</h1> */}
          <h1>Child1:{this.props.bgColor}</h1>
          {/* <button onClick={(e) => {this.handleClick(e)}}>改变父组件bgColor</button> */}
          <button onClick={(e) => {this.handleClick(e)}}>改变Child2 bgColor</button>
        </div>
      );
  }
}

class Child2 extends React.Component{
  constructor(props){
    super(props);
  }
  // handleClick(){
  //   // this.props.bgColor = 'red';
  //   this.props.changeColor('red');
  // }
  render(){
      return (
        <div style={{background:this.props.bgColor}}>
          {/* <h1>父组件background:{this.props.bgColor}</h1> */}
          <h1>Child2背景颜色:{this.props.bgColor}</h1>
          {/* <button onClick={(e) => {this.handleClick(e)}}>改变父组件bgColor</button> */}
        </div>
      );
  }
}

class Father extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      // bgColor: '#999'
      child2BgColor: '#999'
    }
  }
  // onBgColorChange(color){
  //   this.setState({
  //     bgColor : color
  //   })
  // }
  onChild2BgColorChange(color){
    this.setState({
      child2BgColor : color
    })
  }
  render(props){
    return (
      // <div style={{background: this.state.bgColor}}>
      <div>
        {/* <Child bgColor={this.state.bgColor} changeColor={(color)=>{this.onBgColorChange(color)}}/> */}
        <Child1 changeChild2Color={(color) => {this.onChild2BgColorChange(color)}}/>
        <Child2 bgColor={this.state.child2BgColor}/>
      </div>
    );
  }
}
class App extends React.Component{
  render(){
    return (
      <div className="">
          {/* <Title title="App Title"/> */}
          {/* 容器式组件 */}
          <Title>
            <span>App Span</span>
            <a href="">link</a>
          </Title>
          <hr/>
          <Component/>
      </div>
    );
  }
}

ReactDOM.render(
  <Father/>,
  document.getElementById('app')
);