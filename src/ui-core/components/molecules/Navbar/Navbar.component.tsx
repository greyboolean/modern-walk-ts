import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn } from "@clerk/clerk-react";
import { Cart } from "../../organisms";
import { UserAuth } from "../UserAuth";
import { Button } from "../../atoms/Button";
import { FaHeart } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

function Navbar() {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleCart = () => setIsCartOpen((isCartOpen) => !isCartOpen);

	return (
		<nav className={styles.navbar}>
			<SignedIn>
				<Link to="/watchlist">
					{/* <Button>Watchlist</Button> */}
					<Button><FaHeart /></Button>
				</Link>
			</SignedIn>
			<Button onClick={toggleCart}><BsCartFill /></Button>
			<UserAuth />
			<Cart onClose={toggleCart} isOpen={isCartOpen} />
		</nav>
	);
}

export default Navbar;
