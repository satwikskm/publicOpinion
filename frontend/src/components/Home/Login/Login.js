import React from 'react'
import {useState} from 'react'
import {login} from '../../features/user'
import { useDispatch} from 'react-redux';

import axios from 'axios'
import './Login.css'

const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const dispatch = useDispatch();
  const submitHandler =()=>{
    var data = JSON.stringify({
      "email": email,
      "password": password
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:6000/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      const user = JSON.stringify(response.data)
      dispatch(login({ user }))
    })
    .catch(function (error) {
      console.log(error);
    });
    
    console.log("Submitted")
  }
  return (
    <div>
        <h1 className='title'>Login</h1>
        <form className='login' onSubmit={submitHandler}>
            <div className="input-box">
              <label htmlFor="input">Email</label>
            <input 
            className='input'
            type="text" 
            placeholder='Enter your Username/Email to Enter'
            onChange={(e)=>setEmail(e.target.value)}
            />
            </div>

            <div className="input-box">
            
           
           <label htmlFor="input">Password</label>
          <input 
          className='input'
          
          placeholder='Enter your Password'
          type="password" 
          onChange={(e)=>setPassword(e.target.value)}
          />

            </div>
            
            <button className="btn">Login</button>
        </form>
    </div>
  )
}

export default Login