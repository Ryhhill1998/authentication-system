import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcVFJoWFCeSCBLncGs8hd_qpimVLvzgxs",
  authDomain: "authentication-app-caaf9.firebaseapp.com",
  projectId: "authentication-app-caaf9",
  storageBucket: "authentication-app-caaf9.appspot.com",
  messagingSenderId: "526474079214",
  appId: "1:526474079214:web:9f07698bd05bcf04307cff",
};

// init firebase app
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// update user profile
export const updateUserProfile = async (user) => {
  if (!user) return;

  await updateProfile(user, {
    displayName: "Ryhhill1998",
  });

  console.log(user);
};

// sign up new user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential?.user;
    updateUserProfile(user);
  } catch (error) {
    console.error(error.message);
  }
};

// sign out the currently authenticated user
export const signOutAuthUser = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error(error.message);
  }
};

// sign in and authenticate user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential?.user;
    console.log(user);
  } catch (error) {
    console.error(error.message);
  }
};
