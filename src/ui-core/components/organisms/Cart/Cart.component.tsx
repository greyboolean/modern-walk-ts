import { useCart } from '../../../../context/cart/cartContext';
import { CartItem } from '../../molecules';
import styles from './Cart.module.css';

const Cart = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))}
          <div className={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;