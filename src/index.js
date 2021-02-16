import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

changeText = () => {

}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => {
      return (
        <div>Hello there</div>
      )
    }} />
  </div>,
  document.getElementById('root')
);