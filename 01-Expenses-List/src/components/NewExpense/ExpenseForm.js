import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState(""); // initial state is an empty string
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  // another way to do this is to use one state for all of the inputs
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // }); // this is not guaranteed to work, because react may batch state updates
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }); // this is guaranteed to work
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      // prevState is the previous state snapshot
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault(); // prevent the default behavior of the form, which is to send a request and reload the page
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    //bottom-up communication from ExpenseForm to NewExpense
    props.onSaveExpenseData(expenseData); // call the onSaveExpenseData function that was passed in as a prop
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userInput.enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={userInput.enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
