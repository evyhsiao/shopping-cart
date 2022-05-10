import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  // state.getProducts(reducer) return products/loading/error
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  // useEffect 吃兩個參數，第一個參數是一個函式，第二個參數則是一個陣列。
  // 第二個陣列參數代表的是這個 effect 的 dependency，
  // react 會你記住這個值，當這個值有變動時就會觸發這個 effect 的 function。
  // Making asynchronous API calls for data
  // Manually updating the DOM element
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;