import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Atas from './assets/components/atas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper">
      <Atas/>
    </div>
  )
}

export default App
