import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input } from "./common/Input";
import { Submit } from "./common/Submit";
import { withAuth } from "../AuthContext";
import { isEmail, validate } from "../utils/validator";
import { Link } from "react-router-dom";

const Registration = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [name, setName] = useState(false);

  function authenticate (e) {
    e.preventDefault();
    const { email, password } = e.target;

    validate(password.value, setPasswordError);
    validate(email.value, setEmailError);
    validate(name.value, setName);
    if (!isEmail(email.value)) {
      setEmailError(true);
    }

  }

  return (
      <div className="form-login">
        <h2>Registration</h2>
        <form className="form" onSubmit={authenticate}>
          <Input type="input"
                 size="28"
                 name="email"
                 setFunc={setEmailError}
                 placeholder="example@email.com"
                 error={emailError}
          />
          <Input type="input"
                 size="28"
                 name="name"
                 setFunc={setEmailError}
                 placeholder="name"
                 error={emailError}
          />
          <Input type="password"
                 size="28"
                 name="password"
                 setFunc={setPasswordError}
                 placeholder="enter your password"
                 error={passwordError}
          />
          <Submit type="submit" id="enter" name="registration" value="Registration"/>
        </form>
        <div className="new-user">
          <span>Already registered?</span>
          <Link to="/">
            <span className="go-to-reg">Enter</span>
          </Link>
        </div>
      </div>
  )
}

Registration.propTypes = {
  navigateTo: PropTypes.func,
  loginPage: PropTypes.string
}

export const RegistrationWithAuth = withAuth(Registration);