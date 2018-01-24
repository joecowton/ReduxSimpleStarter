import React from 'react';
import ReactDOM from 'react-dom'
// Create anew compmeonent, this should produce HTML.
const App = () => {
  return <div>Hi!</div>;
}



// Take HTML and render to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
