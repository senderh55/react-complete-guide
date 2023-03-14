import useCounter from "../hooks/use-counter";
import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter(false); // every component that uses this custom hook will have its own state

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
