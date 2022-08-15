import React from 'react'
import Login from './Login/Login'
import Register from './Register/Register'
import { useDispatch, useSelector } from 'react-redux';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Login />
        <Register />
    </div>
  )
}

export default Home