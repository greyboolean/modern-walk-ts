import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn } from "@clerk/clerk-react";
import { UserAuth } from "../UserAuth";
import { Button } from "../../atoms/Button";
import { FaHeart } from "react-icons/fa6";
import styles from "./Navbar.module.css";
import { Cart } from "../../organisms";
import { BsCartFill } from "react-icons/bs";

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
			{isCartOpen && <Cart />}
		</nav>
	);
}

export default Navbar;
