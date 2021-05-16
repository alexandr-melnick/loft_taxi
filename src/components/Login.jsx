import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AuthContext, withAuth } from "../AuthContext";
import { Input } from "./common/Input";
import { isEmail, validate } from "../utils/validator";
import { Submit } from "./common/Submit";

const Login = () => {

  const { logIn } = useContext(AuthContext);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  function authenticate (e) {
    e.preventDefault();
    const { email, password } = e.target;

    validate(password.value, setPasswordError);
    validate(email.value, setEmailError);
    if (!isEmail(email.value)) {
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
                 placeholder="enter your password"
                 error={passwordError}
          />
          <span>Forgotten your password?</span>
          <Submit type="submit" id="enter" name="enter" value="Enter" />
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

Login.propTypes = {
}

export const LoginWithAuth = withAuth(Login);

