import { useAuth, useClerk } from "@clerk/clerk-react";
import { useWatchlist } from "../../../../context/watchlist/watchlistContext";
import { useCart } from "../../../../context/cart/cartContext";
import { Button } from "../../atoms/Button";
import { ProductCardProps } from "./ProductCard.types";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import styles from "./ProductCard.module.css";
import { BsCart, BsCartFill } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

function ProductCard({ product }: ProductCardProps) {
	const { title, image, price, description, category } = product;
	const { toggleProduct, isInWatchlist } = useWatchlist();
	const { toggleCartItem, isInCart } = useCart();
	const { isSignedIn } = useAuth();
	const { redirectToSignIn } = useClerk();
	// const navigate = useNavigate();

	const handleWatchlistClick = () => {
		if (isSignedIn) {
			toggleProduct(product);
		} else {
			// navigate("/sign-in");
			redirectToSignIn();
		}
	};

	const handleCartClick = () => {
		if (isSignedIn) {
			toggleCartItem(product);
		} else {
			redirectToSignIn();
		}
	};

	return (
		<div
			className={`${styles.card} ${
				category === "men's clothing" ? styles.men : styles.women
			}`}
		>
			<h2 className={`${styles.title} ${styles.titleShorten}`}>
				{title}
			</h2>
			<div className={styles.imageContainer}>
				<img className={styles.image} src={image} alt={title} />
			</div>
			<div className={styles.content}>
				<div className={styles.price}>
					<span>Rs&nbsp;</span>
					<span>{price}</span>
				</div>
				<p
					className={`${styles.description} ${styles.descriptionShorten}`}
				>
					{description.replace(/(,|\/)(\S)/g, "$1 $2")}
				</p>
				<div>
					<Button onClick={handleWatchlistClick}>
						{/* {isInProductsList(product)
						? "Remove from Watchlist"
						: "Add to Watchlist"} */}
						{isInWatchlist(product) ? <FaHeart /> : <FaRegHeart />}
					</Button>
					<Button onClick={handleCartClick}>
						{isInCart(product) ? (
							<BsCartFill />
						) : (
							<BsCart />
						)}
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
