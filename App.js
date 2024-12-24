import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';

function App() {
  const [count, setCount]=useState(0)
  useEffect(() =>{
    // alert("useEfecter")
  
    console.warn("useEffect")
  })
  return (
    <div className="App">
      <h1>hello useEffect {count}</h1>
      <button onClick={()=>setCount(count+1)}>updates</button>
    </div>
  );
}

export default App;
