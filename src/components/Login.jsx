import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext, withAuth } from "../AuthContext";
import { Input } from "./common/Input";
import { isEmail } from "../utils/isEmail";

const Login = () => {

  const { logIn } = useContext(AuthContext);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  function authenticate (e) {
    e.preventDefault();
    const { email, password } = e.target;

    if (!password.value) {
      setPasswordError(true);
    }

    if (!email.value || !isEmail(email.value)) {
      setEmailError(true);
    }

    logIn(email.value, password.value);
  }

  return (
      <div className="form-login">
        <h2>Enter</h2>
        <form className="form" onSubmit={authenticate}>
          <Input type="input"
                 size="28"
                 name="email"
                 setFunc={setEmailError}
                 placeholder="example@email.com"
                 error={emailError}
          />
          <Input type="password"
                 size="28"
                 name="password"
                 setFunc={setPasswordError}
                 placeholder="enter you password"
                 error={passwordError}
          />
          <span>Forgotten your password?</span>
          <input type="submit" id="enter" name="enter" value="Enter"/>
        </form>
        <div className="new-user">
          New user?
          <span>Registration</span>
        </div>
      </div>
  )
}

export const LoginWithAuth = withAuth(Login);

Login.propTypes = {
  url: PropTypes.string,
  onClick: PropTypes.func
}
