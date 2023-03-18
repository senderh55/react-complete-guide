import { Outlet } from "react-router-dom";

import EventNavigation from "../components/EventsNavigation";

function RootLayout() {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
