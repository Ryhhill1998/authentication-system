import { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

import { signOutAuthUser, auth } from "./utils/firebase/firebase.utils";

import { onAuthStateChanged } from "firebase/auth";

import Home from "./components/home/home.component";
import Authentication from "./components/authentication/authentication.component";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Routes>
    </div>
  );
};

export default App;
