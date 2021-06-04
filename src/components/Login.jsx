import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Input } from "./common/Input";
import { isEmail, validate } from "../utils/validator";
import { Submit } from "./common/Submit";
import { authenticate } from "../modules/actions";

const Login = ({ authenticate, error }) => {

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function authorization (e) {
    e.preventDefault();
    const { email, password } = e.target;

    validate(password.value, setPasswordError);
    validate(email.value, setEmailError);
    if (!isEmail(email.value)) {
      setEmailError(true);
    }

    authenticate(email.value, password.value)
  }

  return (
      <div className="form-login">
      <h2>Enter</h2>
      {error && <span className="invalid">AUTHORISATION ERROR</span>}
        <form className="form" onSubmit={authorization}>
          <Input type="input" size="28" name="email" setFunc={setEmailError} placeholder="example@email.com" error={emailError}/>
          <Input type="password" size="28" name="password" setFunc={setPasswordError} placeholder="enter your password" error={passwordError}/>
          <span>Forgotten your password?</span>
          <Submit type="submit" id="enter" name="enter" value="Enter"/>
        </form>
        <div className="new-user">
          <span>New user?</span>
          <Link to="/signup">
            <span className="go-to-reg">Registration</span>
          </Link>
        </div>
      </div>
  )
}

export const LoginWithAuth = connect((state) => ({ error: state.auth.error }), { authenticate })(Login);

