import { useState } from "react";

import "./sign-in.styles.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  return (
    <form className="form form--signin">
      <h2>Sign in form</h2>
      <label className="form-label">
        Email
        <input className="form-input" type="text" name="name" />
      </label>
      <label className="form-label">
        Password
        <input className="form-input" type="text" name="name" />
      </label>
      <input className="submit-btn" type="submit" value="Sign in" />
    </form>
  );
};

export default SignIn;
