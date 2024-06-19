import { Link } from "react-router-dom";
import { SignedIn } from "@clerk/clerk-react";
import { UserAuth } from "../UserAuth";
import { Button } from "../../atoms/Button";
import { FaHeart } from "react-icons/fa6";
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<SignedIn>
				<Link to="/watchlist">
					{/* <Button>Watchlist</Button> */}
					<Button><FaHeart /></Button>
				</Link>
			</SignedIn>
			<UserAuth />
		</nav>
	);
}

export default Navbar;
