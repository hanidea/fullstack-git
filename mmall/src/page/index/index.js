import _ from 'lodash';
require('./index.css');
require('../../js/module.js');
function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }
  document.body.appendChild(component());