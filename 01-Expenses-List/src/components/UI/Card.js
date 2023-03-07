import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // .In CSS we can pass two classes in classname
  return <div className={classes}>{props.children}</div>;
}

export default Card;
