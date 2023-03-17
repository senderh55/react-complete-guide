import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/auth-slice";

const Auth = () => {
  const dispatch = useDispatch(); // useDispatch is a hook that allows us to dispatch actions to the Redux store

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login()); // action creator function that returns an action object with a type property which should be dispatched to the Redux store
    // this example not include any logic to authenticate the user or to send a request to a backend
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
