import { useCart } from "../../../../context/cart/cartContext";
import { Button } from "../../atoms/Button";
import { CartItem } from "../../molecules";
import { CartProps } from "./Cart.types";
import { BsXCircle } from "react-icons/bs";
import styles from "./Cart.module.css";
import { useEffect, useRef } from "react";

const Cart = ({ onClose, isOpen }: CartProps) => {
	const { cart, clearCart } = useCart();

	const totalPrice = cart.reduce(
		(total, item) => total + item.product.price * item.quantity,
		0
	);

	const originalOverflowRef = useRef(document.body.style.overflow);

    useEffect(() => {
        if (isOpen) {
            originalOverflowRef.current = document.body.style.overflow;
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = originalOverflowRef.current;
        }

        // cleanup function to ensure scrolling is re-enabled when the component unmounts or isOpen changes.
        return () => {
            document.body.style.overflow = originalOverflowRef.current;
        };
    }, [isOpen]);

	return (
		<>
		<div className={`${styles.cart} ${isOpen ? styles.open : ""}`}>
			<div className={styles.header}>
				<h1 className={styles.title}>Cart</h1>
				<Button onClick={onClose}>
					<BsXCircle />
				</Button>
			</div>

			<div className={styles.cartItems}>
				{cart.length > 0 ? (
					<>
						{cart.map((item, index) => (
							<CartItem key={index} cartItem={item} />
						))}
					</>
				) : (
					<p>Your Cart is empty.</p>
				)}
			</div>

			{cart.length > 0 && (
				<div className={styles.footer}>
					<div className={styles.totalPrice}>
						<span>Total Price</span>
						<span>Rs&nbsp;{totalPrice.toFixed(2)}</span>
					</div>
					<div className={styles.actions}>
						<Button>Checkout</Button>
						<Button onClick={clearCart}>Clear Cart</Button>
					</div>
				</div>
			)}
		</div>
		{isOpen && <div className={styles.backdrop} />}
		</>
	);
};

export default Cart;
