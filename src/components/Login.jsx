import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Input } from "./common/Input";
import { isEmail, validate } from "../utils/validator";
import { Submit } from "./common/Submit";
import { authenticate } from "../modules/actions";

const Login = ({ authenticate, error }) => {
  
  const { register, handleSubmit } = useForm();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const authorization = data => {
    const { email, password } = data;
    validate(password, setPasswordError);
    validate(email, setEmailError);
    if (!isEmail(email)) {
      setEmailError(true);
    }
    authenticate(email, password);
  }

  return (
      <div className="form-login">
      <h2>Enter</h2>
      {error && <span className="invalid">AUTHORISATION ERROR</span>}
      <form className="form" onSubmit={handleSubmit(authorization)}>
        <Input
          register={register}
          type="input"
          size="28"
          name="email"
          placeholder="example@email.com"
          error={emailError}
        />
        <Input
          register={register}
          type="password"
          size="28"
          name="password"
          placeholder="enter your password"
          error={passwordError}
        />
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

