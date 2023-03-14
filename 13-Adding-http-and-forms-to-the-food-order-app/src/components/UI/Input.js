import classes from "./Input.module.css";
import React from "react";

// React.forwardRef is used to pass the ref to the input element in the MealItemForm component
const Input = React.forwardRef((props, ref) => {
  // props.input id is for the label to be linked to the input
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;

// the spread operator (...) is used to spread the props.input object into the input element
// this is a shortcut to avoid writing the following code:
// <input
//   id={props.input.id}
//   type={props.input.type}
//   value={props.input.value}
//   onChange={props.input.onChange}
//   onBlur={props.input.onBlur}
// />
