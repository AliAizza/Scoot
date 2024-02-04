import './Components/DesignSystem.css'
import Header from "./Components/Header/Header"
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Careers from './Components/Careers/Careers'
import Locations from './Components/Locations/Locations'


function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/careers" element={<Careers/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
