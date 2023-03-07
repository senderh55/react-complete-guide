import React, { useState } from "react";

import Button from "../../UI/Button/Button";
//import styled from "styled-components";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//    {
//     margin: 0.5rem 0;
//   }

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   & invalid input {
//     border-color: red;
//     background: #ffd7d7;
//   }

//   & invalid label {
//     color: red;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // Setting Dynamic Inline Styles (Not recommended)
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className="form-control">
  //       <labal style={{ color: !isValid ? "red" : "black" }}>Course Goal</labal>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  //Setting CSS Classes Dynamically
  // invalid is a custom class name that we are adding to the div element in the FormControl component
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl invalid={!isValid}>
  //       <labal>Course Goal</labal>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${
          !isValid ? styles.invalid : ""
        }`}
      >
        <labal>Course Goal</labal>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
