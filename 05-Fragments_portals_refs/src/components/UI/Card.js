import classes from "./Card.module.css";
// props.children is a special prop that is available on every component.
// It is a reference to the content between the opening and closing tags of a component.

// classes.card is a CSS module. It is a CSS file that is scoped to a single component.
// props.className is a CSS module. It is a CSS file that is scoped to a single component and is passed in as a prop.
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
