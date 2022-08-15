import React from 'react'
import { useState,useRef } from 'react'
import Posts from '../Post/Post'
import {useSelector} from 'react-redux'
import './dashboard.css'


const Dashboard = () => {
  const {firstName,lastName}= useSelector((state)=>state.user)

    const inputElement = useRef();

    const submitHandle = () => {
        inputElement.current.focus();
      };
  return (
    <div>
      <div className="user-info">
        <p className='user-info'>Public Opinion welcomes {firstName} {lastName} 's thoughts </p>
      </div>
        <form>
            <input 
            className='input'
            type="text" 
            placeholder='Enter your thoughts fearlessly'
            label="Opinion"
            />
            <button 
            onClick={submitHandle}
            className="btn" 
            type='submit'>Post</button>
        </form>
        <div className="posts">
        <Posts />
        </div>
       
    </div>
  )
}

export default Dashboard