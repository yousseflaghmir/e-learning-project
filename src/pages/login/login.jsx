import React from 'react'
import './login.css'

const login = () => {
  return (
    <div className="login-box">
  <p>Login</p>
  <form>
    <div className="user-box">
      <input required="" name="" type="text"/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input required="" name="" type="password"/>
      <label>Password</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      
      Submit
    </a>
  </form>
  <p>Don't have an account? <a href="/signup" className="a2">Sign up!</a></p>
</div>
  )
}

export default login