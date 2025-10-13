import { useState } from 'react'
import './App.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Foglalas from '../components/Foglalas.jsx'
import Info from '../components/Info.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />      
      <Info />
      <Foglalas />
      <Footer />

    </div>
        
  )
}

export default App