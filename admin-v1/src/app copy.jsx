import React from 'react';
import ReactDOM from 'react-dom';

// import 'font-awesome/css/font-awesome.min.css'
// import './index.css';
import './index.scss';

// ReactDOM.render(
//     <div>
//       <i className="fa fa-address-book"></i>
//       <h1>Hello, world!</h1>,
//     </div>,
//     document.getElementById('app')
//   );
let style ={
  // color:'red',
  // fontSize:'30px',
}
let name = 'James';
let names = ['James','test1','cool2']
let flag = false;
let jsx = (
    <div className="jsx" style={style}>
      {/* 条件判断 */}
      {
        flag ?  <p>jsx...{name}</p> :  <p>jsx...not{name}</p>
      }
      {/* 数组循环 */}
      {
        names.map((name,index)=><p key={index}>hello, I am {name}</p>)
      }
    </div>);
ReactDOM.render(
  jsx,
  document.getElementById('app')
);