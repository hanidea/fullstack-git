import React from 'react';
import ReactDOM from 'react-dom';

function Component(){
  return <h1>James</h1>
}

class ES6Component extends React.Component{
  render(){
    return <h1>James in es6</h1>
  }
}

ReactDOM.render(
  <div>
  <Component/>
  <ES6Component/>
  </div>,
  document.getElementById('app')
);