import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserFrofile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated); // useSelector is a hook that allows us to extract data from the Redux store
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserFrofile />}
      <Counter />
    </>
  );
}

export default App;
