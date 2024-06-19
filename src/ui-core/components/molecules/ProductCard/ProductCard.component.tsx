import { useAuth, useClerk } from "@clerk/clerk-react";
import { useProduct } from "../../../../context/productContext";
import { Button } from "../../atoms/Button";
import { ProductCardProps } from "./ProductCard.types";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import styles from "./ProductCard.module.css";
// import { useNavigate } from "react-router-dom";

function ProductCard({ product }: ProductCardProps) {
	const { title, image, price, description, category } = product;
	const { toggleProduct, isInProductsList } = useProduct();
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
	}

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
				<Button onClick={handleWatchlistClick}>
					{/* {isInProductsList(product)
						? "Remove from Watchlist"
						: "Add to Watchlist"} */}
					{isInProductsList(product)
						? <FaHeart />
						: <FaRegHeart />}
				</Button>
			</div>
		</div>
	);
}

export default ProductCard;
