import { signOutAuthUser } from "../../utils/firebase/firebase.utils";

import "./home.styles.css";

const Home = () => {
  const signOutUser = () => {
    console.log("Signing out user");
    signOutAuthUser();
  };

  return (
    <div>
      <h1>This is the homepage</h1>
      <button className="sign-out-btn" onClick={signOutUser}>
        Sign out
      </button>
    </div>
  );
};

export default Home;
