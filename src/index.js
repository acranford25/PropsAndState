import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// write your Color component here
const Color = (props) => {
  return (
    <div className ={props.color} />
  )
}

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState('');
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color='red' selectColor={selectColor} />
        <Color color='blue' selectColor={selectColor}/>
        <Color color='green' selectColor={selectColor}/>
      </div>
    </div>
  );
}

const selectColor = (colorName) => {
  setSelectedColor(colorName);
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);