import { useContext } from "react";
import { UserContext } from "./contexts/user.context";

import { Routes, Route } from "react-router-dom";

import Welcome from "./welcome/welcome.component";
import Authentication from "./components/authentication/authentication.component";
import Home from "./components/home/home.component";

import "./App.css";

const App = () => {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
