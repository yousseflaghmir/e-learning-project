import React from "react";

const signup = () => {
  return (
    <div className="login-box">
      <p>Sign up</p>
      <form>
        <div className="user-box">
          <input required="" name="" type="text" />
          <label>First name</label>
        </div>
        <div className="user-box">
          <input required="" name="" type="text" />
          <label>Last name</label>
        </div>
        <div className="user-box">
          <input required="" name="" type="email" />
          <label>Email address</label>
        </div>
        <div className="user-box">
          <input required="" name="" type="Password" />
          <label>Enter password</label>
        </div>
        <a href="#">
          Submit
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </form>
      <p>
        Already registred{" "}
        <a href="/login" className="a2">
          Sign in!
        </a>
      </p>
    </div>
  );
};

export default signup;
