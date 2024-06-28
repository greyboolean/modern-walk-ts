import { useCart } from "../../../../context/cart/cartContext";
import { CartItemProps } from "./CartItem.types";
import styles from "./CartItem.module.css";
import { BsDash, BsPlus, BsX } from "react-icons/bs";
import { Button } from "../../atoms/Button";

function CartItem({ cartItem }: CartItemProps) {
	const { product, quantity } = cartItem;
	const { isInCart, removeCartItem, incrementCartItem, decrementCartItem } =
		useCart();

	return (
		<div>
			<div className={styles.cartItem}>
				<div className={styles.content}>
					<img className={styles.image} src={product.image} alt={product.title} />
					<h3 className={styles.title}>{product.title}</h3>
					<p className={styles.price}>Rs&nbsp;{(product.price * quantity).toFixed(2)}</p>
				</div>
				<div className={styles.actions}>
					<div className={styles.quantity}>
						<Button onClick={() => decrementCartItem(product)}>
							<BsDash />
						</Button>
						<span>{quantity}</span>
						<Button onClick={() => incrementCartItem(product)}>
							<BsPlus />
						</Button>
					</div>
					<Button onClick={() => removeCartItem(product)}><BsX /></Button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
