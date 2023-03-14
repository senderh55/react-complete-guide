import classes from "./Header.module.css";
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal app</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={"Classes"["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

// 1) Classes"["main-image"] - we cant use dot notation to access the class name becouse of the hyphen (-)
// 2) onClick={props.onShowCart} - we are passing a custom prop to the HeaderCartButton component
export default Header;
