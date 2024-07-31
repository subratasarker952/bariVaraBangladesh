import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInDb, setUserInDb] = useState(null);
  const [error, setError] = useState("");
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // jwt from here
        // send to db from here
        const userInfoJwt = { email: currentUser?.email };
        fetch("https://digitalfurnitureserver.vercel.app/jwt", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(userInfoJwt),
        })
          .then((response) => response.json())
          .then((data) => {
            const token = data?.token;
            if (token) {
              localStorage.setItem("token", token);
            }
          });
        const userInfo = {
          email: currentUser?.email,
          displayName: currentUser?.displayName,
          img: currentUser?.photoURL,
        };

        fetch("https://digitalfurnitureserver.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(userInfo),
        })
          .then((response) => response.json())
          .then(() => {});

        setUserLoading(false);
      } else {
        setUser(null);
        localStorage.removeItem("token");
        setUserLoading(false);
      }
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    userLoading,
    createUser,
    loginUser,
    logOutUser,
    googleLogin,
    error,
    setError,
    githubLogin,
    passwordReset,
    userInDb,
    setUserInDb,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
