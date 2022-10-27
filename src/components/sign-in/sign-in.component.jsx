import { useState } from "react";

import "./sign-in.styles.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields((prev) => {
      const updatedFields = { ...prev };
      updatedFields[name] = value;
      return updatedFields;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);
    resetFormFields();
  };

  return (
    <form className="form form--signin" onSubmit={handleSubmit}>
      <h2>Sign in form</h2>
      <label className="form-label">
        Email
        <input
          className="form-input"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label className="form-label">
        Password
        <input
          className="form-input"
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <input className="submit-btn" type="submit" value="Sign in" />
    </form>
  );
};

export default SignIn;
