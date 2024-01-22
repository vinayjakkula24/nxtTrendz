import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        // eslint-disable-next-line no-unused-vars
        cartList,
        removeCartItem,
        // eslint-disable-next-line no-unused-vars
        addCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      // TODO: Update the functionality to increment and decrement quantity of the cart item

      const onDecrementCartItemCount = () => {
        decrementCartItemQuantity(id, quantity)
      }

      const onIncrementCartItemCount = () => {
        incrementCartItemQuantity(id)
      }

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                data-testid="minus"
                type="button"
                className="quantity-controller-button"
                onClick={onDecrementCartItemCount}
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                data-testid="plus"
                type="button"
                className="quantity-controller-button"
                onClick={onIncrementCartItemCount}
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                data-testid="remove"
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                <AiFillCloseCircle color="#616e7c" size={20} />
              </button>
            </div>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
