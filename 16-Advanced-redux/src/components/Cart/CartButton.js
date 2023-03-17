import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity); // useSelector is a function that we get from react-redux library and it allows us to select a slice of the state
  const dispatch = useDispatch(); // needed for dispatching actions to the redux store
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle()); // dispatch is a function that we get from react-redux library and it allows us to dispatch actions to the redux store
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
