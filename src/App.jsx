import React,{ useState } from 'react'
import  {BrowserRouter as Router,Route,Routes} from  'react-router-dom'
import { Button } from '@chakra-ui/react'
import Header from './Component/Header'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Videos from './Component/Videos'
import Upload from './Component/Upload'
import Login from './Component/Login'
import Signup from './Component/Signup'

function App() {


  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/upload' element={<Upload/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
