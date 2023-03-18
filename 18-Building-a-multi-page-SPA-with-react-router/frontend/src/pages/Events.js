import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData(); // useLoaderData is a hook that returns the data that was returned from the loader function

  // Suspense is a component that can be used to show a fallback component while the data is being loaded
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

// the loader execute in the browser, not in the server, we cant use react hooks in the loader function
// common practice is to put the loader function in the same file as the component that uses it
// the loader function is called when the route is matched
export function loader() {
  return defer({
    // defer is a function that returns a promise that resolves to the data that is returned from the loader function
    events: loadEvents(),
  });
}
