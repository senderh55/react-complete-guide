import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });

      return;
    }

    props.onAddUser(enteredUsername, enteredAge); // call the addUserHandler function that was passed as a prop to the AddUser component
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  // htmlFor is used instead of for because for is a reserved word in JavaScript and cannot be used as a variable name.
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="username">age (Years)</label>
          <input
            id="age"
            type="text"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
