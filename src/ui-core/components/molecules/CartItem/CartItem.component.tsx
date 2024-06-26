import { useCart } from "../../../../context/cart/cartContext";
import { CartItemProps } from "./CartItem.types";
import styles from "./CartItem.module.css";

function CartItem({ cartItem }: CartItemProps) {
	const { product, quantity } = cartItem;
	const { isInCart, removeCartItem, incrementCartItem, decrementCartItem } =
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
					<button onClick={() => removeCartItem(product)}>Remove</button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
