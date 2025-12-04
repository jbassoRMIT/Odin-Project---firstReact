import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Greeting from './Greeting';
import Food from './Food';
import Animals from './Animals';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting person={"Jack basso"}/>
      <Food food={23}/>
      <Animals/>
    </>
  )
}

export default App
