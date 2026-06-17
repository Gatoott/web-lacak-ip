import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Atas from './assets/components/atas'
import Search from './assets/components/search'
import Card from './assets/components/card'
import Footer from './assets/components/footer'

function App() {
  const [myIp, setMyIp] = useState("")
  const [ip, setIp] = useState("")
  const [info, setInfo] = useState(null)

  async function getIp() {
    const res = await fetch(
      "https://api.ipgeolocation.io/v3/ipgeo?apiKey=74a7431cac494eed86c90c4c7b90b90b"
    )

    const data = await res.json()

    console.log(data)
    setMyIp(data.ip)
  }

  async function lacak() {
    const res = await fetch(
      `https://api.ipgeolocation.io/v3/ipgeo?apiKey=74a7431cac494eed86c90c4c7b90b90b&ip=${ip}`
    )

    const data = await res.json()

    console.log(data)
    setInfo(data)
  }

  useEffect(() => {
    getIp()
  }, [])

  return (
    <>
    <main className="wrapper">
      <Atas ip={myIp}/>

      <Search ip={ip} setIp={setIp} getIp={lacak}/>

      {info && (
        <Card 
          ip={info.ip}
          country={info.location.country_name}
          province={info.location.state_prov}
          city={info.location.city}
          timezone={info.time_zone.name}
          spesifik={info.time_zone.standard_tz_abbreviation}
          isp={info.asn.organization}
          latitude={info.location.latitude}
          longitude={info.location.longitude}
        />
      )}

    </main>
      <Footer />
    </>
  )
}

export default App
