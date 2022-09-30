import React from 'react';
import './App.css';
// import {useSelector,useDispatch} from "react-redux"

function App() 
{

  return (
    <>
      <h1>Increment / Decrement Counter</h1>
      <h3>With React and Redux</h3>

      <div>
        <a className='decrement' title='Decrement'><span> - </span></a>
        <input className='input' type="text" value='0'/>
        <a className='increment' title='Increment'><span> + </span></a>

      </div>
    </>
  );
}

export default App;
