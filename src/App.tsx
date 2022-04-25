import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './screens/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './screens/Cart'
import Header from './components/header'
import Footer from './components/footer'
import Contact from './screens/Contact'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
