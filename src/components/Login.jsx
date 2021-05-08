import React from "react";

export const Login = ({url, onClick}) => {

  return (
      <div className="form-login">
        <h2>Enter</h2>
        <form className="form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" size="28" placeholder="example@email.com"/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" size="28" placeholder="**********"/>
          <span >Forgotten your password?</span>
          <input type="button" id="enter" name="enter" value="Enter" onClick={ () => onClick(url) }/>
        </form>
        <div className="new-user">
          New user?
          <span >Registration</span>
        </div>
      </div>
  )
}
