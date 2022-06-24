import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "./firebase.init";
import "./Login.css";
const LogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (loading) {
    return "Loading...";
  }
  return (
    <div>
      <img
        className="whatsapp-icon"
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png?20200503174721"
        alt=""
      />
      <button
        onClick={() => signInWithGoogle()}
        aria-label="Login with Google"
        type="button"
        className="google"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="google-icon"
        >
          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
        </svg>
        <p>Login with Google</p>
      </button>
    </div>
  );
};

export default LogIn;
