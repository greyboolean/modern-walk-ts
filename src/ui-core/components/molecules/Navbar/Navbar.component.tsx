import { Link } from "react-router-dom";
import { UserAuth } from "../UserAuth";
import { Button } from "../../atoms/Button";
import styles from "./Navbar.module.css";
import { SignedIn } from "@clerk/clerk-react";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<SignedIn>
				<Link to="/watchlist">
					<Button>Watchlist</Button>
				</Link>
			</SignedIn>
			<UserAuth />
		</nav>
	);
}

export default Navbar;
