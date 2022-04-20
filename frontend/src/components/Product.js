import './Product.css'
import {Link} from 'react-router-dom'

const Product = ({imageUrl, name, price, description, productId}) => {
  const des = description.substring(0, 60);
  return (
    <div className="product">
        <div className="product__img">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="product__info">
            <p className="info__name">{name}</p>
            <p className="info__description">
              {des.length < 60 ? 
              des : des+"..."}
            </p>
            <p className="info__price">${price}</p>

            <Link to={`/product/${productId}`} className="info__button">
                View
            </Link>
        </div>
    </div>
  )
}

export default Product