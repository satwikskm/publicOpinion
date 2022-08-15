import {useSelector} from 'react-redux'
import React from 'react'
import './Post.css'
import io from 'socket.io-client'
//const socket = io.connect("http://localhost:6000")



const Posts = () => {
  const {firstName,lastName,email}= useSelector((state)=>state.user)
  const sendMessage=()=>{
    // socket.emit()
  }
  return (
    <section>
      <div className='card'>
        
        <p className='post'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi placeat fuga, nemo consequatur iure aperiam quidem sequi veritatis voluptatibus temporibus doloribus dolore, qui laudantium ipsam fugiat ipsum ut vero. Repudiandae.</p>
        <span className='author'>{firstName} {lastName}</span>
        <span className='email'>{email}</span>
       
    </div>
    
    </section>
    
  )
}

export default Posts