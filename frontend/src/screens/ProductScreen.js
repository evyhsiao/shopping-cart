import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = () => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const { id } = useParams();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && id !== product._id) {
        dispatch(getProductDetails(id));
        }
    }, [dispatch, id, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
    };

    return (
        <div className="productscreen">
        {loading ? (
            <h2>Loading...</h2>
        ) : error ? (
            <h2>{error}</h2>
        ) : (
            <>
                <div className="productscreen__left">
                    <div className="left__image">
                        <img src={product.imageUrl} alt={product.name} />
                    </div>
                </div>

                <div className="productscreen__right">
                    <div className="top__info">
                        <p className="info__name">
                            {product.name}
                        </p>
                        <p className="info__desc">
                            Description
                        </p>
                        <p className="info__description">
                            {product.description}
                        </p>
                    </div>
                    <div className="bottom__info">
                        <p className="info__price">
                            Price <span>${product.price}</span>
                        </p>
                        <p className="info__state">
                            Status 
                            <span>
                                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}    
                            </span>
                        </p>
                        <p className="info__qty">
                            Quantity
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                            </select>
                        </p>
                        <p className="info__total">
                            Total <span>${product.price*qty}</span>
                        </p>
                        <p className="add__button">
                            {/* <button type="button" onClick={addToCartHandler}> */}
                                <Link to="/cart" className="toCart_link" onClick={addToCartHandler}>Add to Cart</Link>
                            {/* </button> */}
                        </p>
                    </div>
                </div>
            </>
            )}
        </div>
    );
};

export default ProductScreen;