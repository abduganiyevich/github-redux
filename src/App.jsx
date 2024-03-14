import { useState } from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <header className='header'>
      <h1>logo</h1>
      <h2>0</h2>
    </header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
