import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = ({click}) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    // const sumWithInitial = array1.reduce(
    // (previousValue, currentValue) => previousValue + currentValue, initialValue);
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    return (
        // Navigation bar
        <nav className="navbar">
            <Link to="/" className="navbar__logo">
                <h2>Treasures Shop</h2>
            </Link>

            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        {/* shopping cart icon from CDNjs font awesome */}
                        <i className="fas fa-shopping-cart"></i>
                        <span>Cart</span>
                        {/* the number of items in the cart */}
                        <span className="cartlogo__badge">{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    {/* when the Shop clicked, go back to HomeScreen */}
                    <Link to="/" className="shop__link">
                        Shop
                    </Link>
                </li>
            </ul>

            {/* make three divs and it be like a hamburgur menu */}
            <div className="hamburgur__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar