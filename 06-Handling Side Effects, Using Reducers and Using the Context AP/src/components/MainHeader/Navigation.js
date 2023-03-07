import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";
// </AuthContext.Consumer> is a component that allows us to consume the context object (AuthContext) that we created in Auth-context.js\

const Navigation = (props) => {
  const context = useContext(AuthContext);
  // useContext() is a React hook that allows us to consume the context object (AuthContext) that we created in Auth-context.js
  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
