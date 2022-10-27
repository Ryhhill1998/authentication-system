import SignUp from "./components/sign-up/sign-up.component";
import SignIn from "./components/sign-in/sign-in.component";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Authentication App</h1>
      <div className="forms-container">
        <SignUp />
        <SignIn />
      </div>
    </div>
  );
};

export default App;
