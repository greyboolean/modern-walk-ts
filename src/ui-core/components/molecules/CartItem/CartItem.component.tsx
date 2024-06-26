import { useCart } from "../../../../context/cart/cartContext";
import styles from "./CartItem.module.css";

function CartItem({ cartItem }) {
	const { product, quantity } = cartItem;
	const { isInCart, removeItem, incrementCartItem, decrementCartItem } =
		useCart();

	return (
		<div>
			<div className={styles.cartItem}>
				<div>
					<img src={product.image} alt={product.title} />
					<h3>{product.title}</h3>
					<p>{product.price}</p>
				</div>
				<div>
					<div>
						<button onClick={() => decrementCartItem(product)}>
							-
						</button>
						<span>{quantity}</span>
						<button onClick={() => incrementCartItem(product)}>
							+
						</button>
					</div>
					<button onClick={() => removeItem(product)}>Remove</button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
