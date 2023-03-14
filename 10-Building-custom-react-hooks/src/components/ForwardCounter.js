import useCounter from "../hooks/use-counter";
import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter(); // every component that uses this custom hook will have its own state

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
