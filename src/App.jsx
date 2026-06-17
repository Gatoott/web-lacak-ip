import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Atas from './assets/components/atas'
import Search from './assets/components/search'

function App() {
  const [info, setInfo] = useState("")
  async function getIp() {
    const res = await fetch(
      "https://api.ipgeolocation.io/v3/ipgeo?apiKey=74a7431cac494eed86c90c4c7b90b90b"
    )

    const data = await res.json()

    console.log(data)
    setInfo(data)
  }

  useEffect(() => {
    getIp()
  }, [])

  return (
    <div className="wrapper">
      <Atas/>
      <Search ip={info.ip}/>
    </div>
  )
}

export default App
