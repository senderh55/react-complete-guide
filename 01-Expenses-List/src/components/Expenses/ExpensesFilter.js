import React from "react";

import "./ExpensesFilter.css";
// Controlled Component by ExpenseForm.js
// because the ExpensesFilter component is a child of the Expenses component,
// it can access the props of the Expenses component
const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    // Parent-to-Child Component Communication (Top-down)
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
