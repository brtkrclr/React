// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return "Click on Me"
}

// Create a react component
//that component either a function or a class
const App = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name"> {labelText} </label>
       
     
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit </button>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()} </button>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text} </button>
     
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
