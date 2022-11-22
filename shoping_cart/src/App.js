import {  useContext, useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import { ThemeContext } from './Context/ThemeContext';

function App() {
const {isLight} = useContext(ThemeContext)
  const [state,setState] = useState(0)


  return (
    <div className={`App ${isLight?"light":"dark"}`}>
      <Navbar/>
       <button onClick={()=>setState(state+1)} >+</button>
            {state}
       <button onClick={()=>setState(state-1)}>-</button>
    </div>
  );
}

export default App;
