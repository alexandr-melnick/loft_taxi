import React from "react";

export const Home = () => {
  return (
      <div className="form-login">
        <h2>Enter</h2>
        <form className="form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" size="28" placeholder="example@email.com"/>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" size="28" placeholder="**********"/>
          <a href="#">Forgotten your password?</a>
          <input type="button" id="enter" name="enter" value="Enter"/>
        </form>
        <div className="new-user">
          New user?
          <a href="#">Registration</a>
        </div>
      </div>
  )
}
