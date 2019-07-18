import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   name : "James"
    // }
  }
  render(){
    // setTimeout(()=>{
    //   this.setState({
    //     name: 'James Test'
    //   })
    // },2000)
    return <h1>{this.props.name} in es6</h1>
  }
}

ReactDOM.render(
  <div>
  <Component name="James 123"/>
  </div>,
  document.getElementById('app')
);