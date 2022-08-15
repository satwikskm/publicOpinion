import React, {useState} from 'react'
import axios from 'axios'
import './Register.css'

const Register = () => {
  // const firstname = useRef('')
  // const lastname = useRef('')
  // const email = useRef('')
  // const password = useRef('')
  // const confirmPassword = useRef('')
  const [firstname,setFirstname]=useState('')
  const [lastname ,setLastname ]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')

  const submitHandler = () =>{
    console.log(password,confirmPassword)
    // if(password === confirmPassword){
      let data = JSON.stringify({
        "firstName": firstname,
        "lastName": lastname,
        "email": email,
        "password": password
      });


  
      var config = {
        method: 'post',
        url: 'http://localhost:6000/create',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return(
          <h1>User Created Successfully</h1>
         
        )
      })
      .catch(function (error) {
        console.log(error);
      });
      
      
    // }else{
    //   alert("Passowrd do not match")
    // }
   

  }
  
  return (
    <div>
      {console.log("register")}
        <h1 className='title'>Register</h1>
         <form className='register' onSubmit={submitHandler}>
            <div className="input-box">
            <label htmlFor="input">First Name</label>
            <input 
            className='input'
           value={firstname}
            type="text" 
            placeholder='Enter your first name'
            onChange={(e)=>{setFirstname(e.target.value)}}
            />
            </div>
            <div className="input-box">
            <label htmlFor="input">Last Name</label>
          <input 
          className='input'
         value={lastname}
          placeholder='Enter Your Last Name'
          type="text" 
          onChange={(e)=>{setLastname(e.target.value)}}
          />
            </div>
            <div className="input-box">
            <label htmlFor="input">Email</label>
          <input 
          className='input'
         value={email}
          placeholder='Enter Your email'
          type="email" 
          onChange={(e)=>{setEmail(e.target.value)}}
          />
            </div>
            <div className="input-box">
            <label htmlFor="input">Password</label>
          <input 
          className='input'
          placeholder='Password'
         value={password}
          type="password" 
          onChange={(e)=>{setPassword(e.target.value)}}
          />
            </div>
            <div className="input-box">
            <label htmlFor="input">Confirm Password</label>
          <input 
          className='input'
          value={confirmPassword}
          placeholder='Password'
          type="password" 
          onChange={(e)=>{setConfirmPassword(e.target.value)}}
          />
            </div>
           
          

            
            
            <button className="btn" type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register