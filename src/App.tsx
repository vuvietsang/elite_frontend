import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './screens/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App
