import classes from "./Card.module.css";

// props.children porpuse is to get access to the wrapped contant and wrap the content of the component
// for example, the Card component is wrapping the <ul> element in the AvailableMeals component
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};
export default Card;
