import { useState } from 'react'
import Header from './cmponents/Header/Header'
import './App.css'
import Footer from './cmponents/Footer/Footer'
import Home from './cmponents/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
