import { Link, useSubmit } from "react-router-dom";

import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const submit = useSubmit(); // useSubmit hook will return a function that we can use to trigger the action

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      // we need to use the submit function to trigger the action
      submit(null, { method: "delete" }); // first argument is the data that we want to send to the action, second argument is the options object
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
