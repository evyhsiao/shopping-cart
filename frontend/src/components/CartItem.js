import './CartItem.css'
import {Link} from 'react-router-dom'

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <Link to={`/product/${item.product}`} className="cartitem__link">
        <div className="cartitem__image">
        <img src={item.imageUrl} 
                alt={item.name} />
        </div>

        {/* <Link to={`/product/${11}`} className="cartitem__name"> */}
        <p className="cartitem__name">{item.name}</p>
        {/* </Link> */}

        <p className="cartitem__price">${item.price*item.qty}</p>
      </Link>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
            {/* start from 0 */}
          </option>
        ))}
      </select>

      <button className="cartitem__deleteBtn" onClick={() => removeHandler(item.product)}>
          <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CartItem