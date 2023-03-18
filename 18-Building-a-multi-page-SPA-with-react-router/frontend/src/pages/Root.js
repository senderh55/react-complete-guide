import { Outlet /*useNavigation*/ } from "react-router-dom"; // OUTLET is a special component that allows us to render the content of a route

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  // Reflecting The Current Navigation State in the UI
  //const navigation = useNavigation(); // useNavigation() is a hook that returns the navigation object

  return (
    <>
      <MainNavigation />
      <main>
        {/*navigation.state === "loading" && <p>Loading...</p>*/}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
