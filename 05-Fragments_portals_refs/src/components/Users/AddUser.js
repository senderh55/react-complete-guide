import { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  // if we want only read values from the DOM we can use the ref instead of state
  const nameInputRef = useRef(); // useRef is used to get a reference to a DOM element (input in this case)
  const ageInputRef = useRef(); // objects created with useRef persist for the full lifetime of the component
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value; // current is used to get the current value of the ref
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });

      return;
    }

    props.onAddUser(enteredName, enteredUserAge); // call the addUserHandler function that was passed as a prop to the AddUser component
    nameInputRef.current.value = ""; // clear the input fields after the form is submitted and the user is added to the list
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  // htmlFor is used instead of for because for is a reserved word in JavaScript and cannot be used as a variable name.
  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="username">age (Years)</label>
          <input id="age" type="text" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
