import { useState } from 'react'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(0);
  // let counter = 0;

  const add = () => {
    setCounter(Counter => Math.min(Counter + 1, 20));
  }

  const remove = () => {
    setCounter(Counter => Math.max(Counter - 1, 0));
  }

  // if(Counter<0){
  //   console.log("cannot go beyond this");
  // }

  // if(Counter>20){
  //   console.log("cannot go above this");
  // }

  return (
    <>

      <h1>chai aur code</h1>
      <h3> counter value: {Counter}</h3>

      <button onClick={add}>increase value: {Counter}</button>
      <button onClick={remove}>decrease value: {Counter}</button>

    </>
  )
}

export default App
