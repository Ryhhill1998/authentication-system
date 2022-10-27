import { useState, useEffect } from "react";

import { signOutAuthUser, auth } from "./utils/firebase/firebase.utils";

import { onAuthStateChanged } from "firebase/auth";

import SignUp from "./components/sign-up/sign-up.component";
import SignIn from "./components/sign-in/sign-in.component";

import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const signOutUser = () => {
    console.log("Signing out user");
    signOutAuthUser();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <h1 className="title">Authentication App</h1>
      <div className="forms-container">
        <SignUp />
        <SignIn />
      </div>
      {currentUser && (
        <button className="sign-out-btn" onClick={signOutUser}>
          Sign out
        </button>
      )}
    </div>
  );
};

export default App;
