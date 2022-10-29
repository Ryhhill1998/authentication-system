import { useContext, useEffect, useState } from "react";
import { UserContext } from "./contexts/user.context";

import { Routes, Route, Navigate } from "react-router-dom";

import Welcome from "./welcome/welcome.component";
import Authentication from "./components/authentication/authentication.component";
import Home from "./components/home/home.component";

import "./App.css";

const App = () => {
  const { currentUser } = useContext(UserContext);
  const [user, setUser] = useState(null);

  const getUserFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setUser(user);
  };

  useEffect(() => {
    getUserFromLocalStorage();
  }, [currentUser]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Welcome />}
        />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
