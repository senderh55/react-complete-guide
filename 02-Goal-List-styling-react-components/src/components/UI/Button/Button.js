import styled from "styled-components";
import React from "react";
import styles from "./Button.module.css"; // This is a CSS module

// This is a function that returns a component

// const Button = (props) => {
//   return (
//     <button
//       type={props.type}
//       className={`button ${props.className}`}
//       onClick={props.onClick}
//     >
//       {props.children}
//     </button>
//   );
// };

// This is a function that returns a component
// & is a special character in styled components that allows us to target the root element of the component we are styling (in this case the button) and apply styles to it (in this case the hover and active styles) and also to the pseudo selectors of the component (in this case the focus pseudo selector) and apply styles to it.
// const Button = styled.button`
//   font: inherit;
//   cursor: pointer;
//   padding: 0.5rem 2rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   transition: background-color 0.3s ease-out, border-color 0.3s ease-out,
//     color 0.3s ease-out;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     color: white;
//   }

//   &:disabled {
//     cursor: not-allowed;
//     background: #ccc;
//     border-color: #ccc;
//     color: #666;
//   }
// `;

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
