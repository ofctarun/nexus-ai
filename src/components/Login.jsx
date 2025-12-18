import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { userIcon } from "../utils/constants";

const Login = () => {
  //state variables declaration

  //SignUp or SignIn
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const gmail = useRef(null);
  const password = useRef(null);


  const dispatch = useDispatch();

  //Functions
  const handleLogin = () => {
    setIsSignUp(!isSignUp);
    console.log(isSignUp);
  }

  const handleSubmit = () => {
    const nameValue = isSignUp ? name.current.value : null;
    const gmailValue = gmail.current.value;
    const passwordValue = password.current.value;
    setErrorMessage(validate(isSignUp, nameValue, gmailValue, passwordValue));

    //when credentials are invalid
    if (errorMessage) return;

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, gmailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: {userIcon}
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            navigate("/browse")
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          })
          window.alert("User Successfully Registered!!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
    else {
      signInWithEmailAndPassword(auth, gmailValue, passwordValue)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          window.alert("User SignIn successfull");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  }


  return (
    <div className="relative h-svh w-screen overflow-hidden">
      <Header />
      <div>
        <img
          className="absolute top-0 left-0 h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg"
          alt="Netflix background"
        />
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-black/60 z-10"></div>
      <form className="absolute z-20 flex flex-col items-center justify-center top-1/2 left-1/2
                       transform -translate-x-1/2 -translate-y-1/2 bg-black/60 p-10 rounded-lg 
                       w-[90%] max-w-md text-white" onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-3xl font-bold mb-6">{isSignUp ? "Sign Up" : "Sign In"}</h1>
        {isSignUp &&
          <input
            ref={name}
            type="text"
            placeholder="User name"
            className="p-3 mb-4 w-full bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none" />
        }
        <input
          ref={gmail}
          type="text"
          placeholder="Email address"
          className="p-3 mb-4 w-full bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none" />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mb-4 w-full bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none" />

        <p className="mb-3 text-red-500">{errorMessage}</p>

        <button className="bg-red-600 hover:bg-red-700 transition-colors duration-300
                            font-semibold p-3 w-full rounded" onClick={handleSubmit}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <h4 className="m-3 text-gray-400">{isSignUp ? "Already a user?" : "New to Netflix ?"} <span className="text-white cursor-pointer hover:underline" onClick={handleLogin}>{isSignUp ? "Sign In" : "Sign Up"}</span></h4>
      </form>
    </div>
  );
};

export default Login;
