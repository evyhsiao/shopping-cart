import "./SideDrawer.css";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

const SideDrawer = ({show, click}) => {
  // make a move in and out style
  const sideDrawerClass = ["sidedrawer"];

  if(show) {
    sideDrawerClass.push("show");
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };


  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
          <li>
              <Link to="/cart" className="sidedrawer__cartlink">
                  <i className="fas fa-shopping-cart"></i>
                  <span>Cart</span>
                  <span className="sidedrawer__cartbadge">{getCartCount()}</span>
              </Link>
          </li>
          <li>
              <Link to="/">
                  Shop
              </Link>
          </li>
      </ul>
    </div>
  )
}

export default SideDrawer