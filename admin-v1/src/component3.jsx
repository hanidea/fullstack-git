import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : "James",
      age : 18
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    // console.log('onClick')
    this.setState({
      age : this.state.age + 1
    });
  }
  render(){
      return (
        <div>
          <h1>I am {this.state.name}</h1>
          <p>I am {this.state.age}</p>
          <button onClick={this.handleClick}>加一岁</button>
        </div>
      );
  }
}
class Title extends React.Component{
    constructor(props){
        super(props);
    }
    render(props){
        return <h1>{this.props.title}</h1>
    }
}

class App extends React.Component{
     render(){
         return (
             <div className="">
               <Title title="App"/>
               <hr/>
               <Component/>
             </div>
         );
     }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);