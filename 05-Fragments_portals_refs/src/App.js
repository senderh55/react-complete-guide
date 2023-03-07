import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  // addUserHandler is a function that is called when the form is submitted
  // it takes the user data from the form and adds it to the usersList array
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  // onAddUser is a function that is passed as a prop to the AddUser component
  // and is called when the form is submitted
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
