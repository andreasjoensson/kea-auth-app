import React, { useEffect, useRef } from "react";
import firebase from "firebase/app";
import { useState } from "react";
import * as firebaseui from "firebaseui";
import { getFirebaseAuth } from "./firebase";
import { getFirebaseGoogle } from "./firebase";

const uiConfig = {
  signInOptions: [
    getFirebaseGoogle(),
    // Add other providers as needed
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
    signInFailure: (error) => {
      console.error("Sign-in error:", error);
      return Promise.resolve();
    },
  },
};

function FirebaseAuth() {
  const authUIRef = useRef();
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    if (showSignIn && !authUIRef.current) {
      authUIRef.current = new firebaseui.auth.AuthUI(getFirebaseAuth());
      authUIRef.current.start("#firebaseui-auth-container", uiConfig);
    }
  }, [showSignIn]);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };
  return (
    <div>
      <h1>Authentication</h1>
      {showSignIn ? (
        <div id="firebaseui-auth-container"></div>
      ) : (
        <button onClick={handleSignInClick}>Sign In</button>
      )}
    </div>
  );
}

export default FirebaseAuth;
