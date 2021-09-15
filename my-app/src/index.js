import React from 'react';
import ReactDom from 'react-dom';

// arrow function 
// const Greeting = () => {
//   // return <h1>Hello World</h1>;
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'));
// }

// traditional function method
function Greeting() {
  return(
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

// converting the react component as a HTML element
ReactDom.render(<Greeting />, document.getElementById('root'));