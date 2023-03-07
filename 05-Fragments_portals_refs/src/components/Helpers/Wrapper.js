// This component is used to wrap the components
const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;

// another whrapper is <></> which is a fragment and is used to wrap multiple elements without adding extra nodes to the DOM
// React.Fragment is also a valid alternative to <></>
