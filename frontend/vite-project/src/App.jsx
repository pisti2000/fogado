import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Foglalas from './components/Foglalas'
import Info from './components/Info'
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