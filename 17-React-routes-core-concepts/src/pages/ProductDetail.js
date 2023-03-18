import { useParams } from "react-router-dom";
function ProductDetailPage() {
  const params = useParams(); // useParams() is a hook that returns an object with the dynamic parameters

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
