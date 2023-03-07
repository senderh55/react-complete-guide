import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

// ref is a special prop that is passed to functional components by React
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // Rare case where we need to use the ref to access the DOM element
  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(props.forwardedRef, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
