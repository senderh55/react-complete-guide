import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const StarteditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // copy all the properties of the object
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); // call the onAddExpense function that was passed in as a prop
    setIsEditing(false);
  };
  // conditional content rendering (if isEditing is true, then render the ExpenseForm component, otherwise render the button)
  let content = <button onClick={StarteditingHandler}>Add new Expense</button>;
  if (isEditing)
    content = (
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    );

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
