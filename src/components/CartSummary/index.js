// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const cartItemPrices = []

      // eslint-disable-next-line no-unused-vars
      const itemPrices = cartList.map(eachItem =>
        cartItemPrices.push(eachItem.price * eachItem.quantity),
      )

      const totalPrice = cartItemPrices.reduce(
        (accumulator, item) => accumulator + item,
      )

      const numOfItems = cartList.length

      return (
        <div className="cart-summary-container">
          <div className="cart-summary">
            <h1 className="heading-cart-item">
              Order Total:{' '}
              <span className="total-price">Rs {totalPrice}/- </span>
            </h1>
            <p className="para-cart-item">{numOfItems} Items in cart</p>
            <button type="button" className="button-checkout">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
