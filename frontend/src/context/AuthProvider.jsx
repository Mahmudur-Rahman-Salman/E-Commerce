import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const provider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // signup
  const signup = async (email, password) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName: name });

    localStorage.setItem("user", JSON.stringify(result.user));

    return result.user;
  };

  // Signin
  const signin = async (email, password) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);

    localStorage.setItem("user", JSON.stringify(result.user));
    return result.user;
  };

  // Google Login
  const googleLogin = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, provider);

    localStorage.setItem("user", JSON.stringify(result.user));
    return result.user;
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    setUser(null);
  };

  // Auto Login Tracking
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    signup,
    signin,
    googleLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={{ value }}>{children}</AuthContext.Provider>
  );
};
