import { Link } from "react-router-dom";
// Link to the products page -> change the URL without reloading the page
function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        {" "}
        Go To <Link to="/products">Products</Link>
      </p>
    </div>
  );
}
export default HomePage;
