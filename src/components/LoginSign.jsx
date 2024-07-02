import React from 'react'
import './style.css';
import email from '../assets/image/email.png'
import password from '../assets/image/password.png'
import person from '../assets/image/person.png'


const LoginSign = () => {
  return (
    <div className='container'>
     <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
     </div>
     <div className="inputs">
        <div className="input">
            <img src={person} alt="icon"  />
            <input type="text" placeholder='Name' />
        </div>
        <div className="input">
            <img src={email} alt="icon" />
            <input type="email" placeholder='Email' />
        </div>
        <div className="input">
            <img src={password} alt="icon" />
            <input type="password" placeholder='Password' />
        </div>
     </div>
     <div className='forget-pass'>forget password? <span>Click Here!</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>

    </div>
  )
}

export default LoginSign
