import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Navbar from './components/Navbar'
import Appointment from './pages/Appointment'
import Footer from './components/Footer'

export const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]>'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/doctors' element={<Doctors />}/>
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/my-appointments' element={<MyAppointment />}/>
        <Route path='/appointment/:docId' element={<Appointment />}/>

      </Routes>
      <Footer />
    </div>
  )
}
export default App