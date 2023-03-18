import {
  createBrowserRouter,
  RouterProvider,
  //createRoutesFromElements,
  //Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";
/*
***AN ALTERNATIVE WAY OF DEFINING ROUTES***
const routes = createRoutesFromElements([
  <Route path="/" element={<HomePage />} />, // path: "/" is the default path,  element: <HomePage /> is the default page
  <Route path="/products" element={<ProductPage />} />, // path: "/products" is the path to the products page, element: <ProductPage /> is the products page
]);
const router = createBrowserRouter(routes);
*/

const router = createBrowserRouter([
  // we use absolute paths to define the routes, as opposed to relative paths
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // The children property is used to define the default page and other pages in the layout (in this case, the RootLayout)
      { index: true, path: "/", element: <HomePage /> }, //index: true is used to define the default page, ath: "/" is the default path,  element: <HomePage /> is the default page
      { path: "/products", element: <ProductPage /> }, // path: "/products" is the path to the products page, element: <ProductPage /> is the products page
      { path: "/products/:productId", element: <ProductDetailPage /> }, // :productId is a dynamic parameter, : is used to define a dynamic parameter
    ],
  }, // path: "/" is the default path,  element: <RootLayout /> is the default page
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
