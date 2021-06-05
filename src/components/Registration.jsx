import React, { useState } from "react";
import { Input } from "./common/Input";
import { Submit } from "./common/Submit";
import { isEmail, validate } from "../utils/validator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registration } from "../modules/actions";
import { useForm } from "react-hook-form";

export const Registration = ({ registration }) => {
  const { register, handleSubmit } = useForm();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function registrationOnserver (data) {
    const { email, password, name, surname} = data;
    validate(password, setPasswordError);
    validate(email, setEmailError);
    if (!isEmail(email)) {
      setEmailError(true);
    }
    if (email && password && name && surname) registration({ email, password, name, surname })
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
  }

  return (
      <div className="form-login">
        <h2>Registration</h2>
        <form className="form" onSubmit={handleSubmit(registrationOnserver)}>
        <Input
          register={register}
          type="input"
          size="28"
          name="email"
          error={emailError}
        />
        <Input
          register={register}
          type="input"
          size="28"
          name="name"
          placeholder="name"
          error={emailError}
        />
        <Input type="input"
          register={register}
          size="28"
          name="surname"
          placeholder="surname"
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
        <Submit type="submit" id="enter" name="registration" value="Registration" />
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

export const RegistrationWithAuth = connect(null, { registration })(Registration);
