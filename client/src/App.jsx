import React from 'react'
import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Categories from './pages/Categories'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <>
    
    
     <Routes>
      
      <Route path='/' element={<Layout><Home/></Layout>}/>
      <Route path='/about' element={<Layout><About/></Layout>}/>
      <Route path='/contact' element={<Layout><Contact/></Layout>}/>
      <Route path='/products' element={<Layout><Products/></Layout>}/>
      <Route path='/categories' element={<Layout><Categories/></Layout>}/>
      <Route path='/register' element={<Layout><Register /></Layout>}/>
      <Route path='/login' element={<Layout><Login/></Layout>}/>

     </Routes>
    
    </>
  )
}

export default App