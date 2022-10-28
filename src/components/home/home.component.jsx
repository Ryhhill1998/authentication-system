import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

import "./home.styles.css";

const Home = () => {
  const { currentUser } = useContext(UserContext);

  const signOutUser = () => {
    console.log("Signing out user");
    signOutAuthUser();
  };

  return (
    <div>
      <h1>This is the homepage</h1>
      {currentUser && (
        <button className="sign-out-btn" onClick={signOutUser}>
          Sign out
        </button>
      )}
    </div>
  );
};

export default Home;
