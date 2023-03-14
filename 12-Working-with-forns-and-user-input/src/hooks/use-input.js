import { useState } from "react";
// This is a custom hook that can be used in any component that needs to validate an input field
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false); // the user has to touch the input field before the validation message is shown, dealing the case when the user has not touched the input field yet

  const valueIsValid = validateValue(enteredValue); // validateValue is a function that is passed in as an argument
  const hasError = !valueIsValid && isTouched; // if the entered name is not valid and the user has touched the input field

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    // return an object
    value: enteredValue, // return the entered value as a property of the object named value
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;

// NOTES
//const nameInputRef = useRef(); // alternative to useState for managing the state of the input field
// const [enteredName, setEnteredName] = useState("");
// if you want to use the value of the input field in the form submission handler, you can use the useRef hook
// if the entered value is needed after every keystroke, for example for instant validation you can use the useState hook
