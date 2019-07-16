import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : "James",
      age : 18
    }
  }
  handleClick(){
    this.setState({
      age : this.state.age + 1
    });
  }
  onValueChange(e){
      this.setState({
          age : e.target.value
      });
  }
  render(){
      return (
        <div>
          <h1>I am {this.state.name}</h1>
          <p>I am {this.state.age}</p>
          <button onClick={(e) => {this.handleClick(e)}}>加一岁</button>
          <input type="text" onChange={(e)=>{this.onValueChange(e)}}/>
        </div>
      );
  }
}
class App extends React.Component{
  render(){
    return {
      <div className="">
          <Component/>
      </div>
    };
  }
}

ReactDOM.render(
  <Component/>,
  document.getElementById('app')
);