import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // dummy logout function that does nothing (we don't need to do anything here) - we just need to pass a function to the context provider
  onLogin: (email, password) => {}, // dummy login function that takes an email and password as arguments (we don't need them here) and does nothing (we don't need to do anything here) - we just need to pass a function to the context provider
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []); // empty array as second argument (dependencies) to useEffect() to make sure that the function is only executed once

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  // We should of course check email and password
  // But it's just a dummy/ demo anyways
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
