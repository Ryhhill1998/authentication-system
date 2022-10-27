import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Authentication App</h1>
      <div className="forms-container">
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
          <input className="submit-btn" type="submit" value="Submit" />
        </form>

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
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
