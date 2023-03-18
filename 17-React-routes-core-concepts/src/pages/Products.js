import { Link } from "react-router-dom";

const PRODUCTS = [
  // dummy database
  { id: "p1", title: "A Book", price: 6 },
  { id: "p2", title: "A Carpet", price: 99 },
  { id: "p3", title: "An Online Course", price: 9 },
];

function ProductPage() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProductPage;
