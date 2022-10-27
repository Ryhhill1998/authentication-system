import { useState } from "react";

import "./sign-up.styles.css";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword } = formFields;

  return (
    <form className="form form--signup">
      <h2>Sign up form</h2>
      <label className="form-label">
        Email
        <input className="form-input" type="text" name="name" />
      </label>
      <label className="form-label">
        Password
        <input className="form-input" type="text" name="name" />
      </label>
      <label className="form-label">
        Confirm password
        <input className="form-input" type="text" name="name" />
      </label>
      <input className="submit-btn" type="submit" value="Sign up" />
    </form>
  );
};

export default SignUp;
