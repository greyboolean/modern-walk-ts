import { Link } from "react-router-dom";
import { UserAuth } from "../UserAuth";
import { Button } from "../../atoms/Button"; 
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<UserAuth />
			<Link to="/watchlist">
				<Button>Watchlist</Button>
			</Link>
		</nav>
	);
}

export default Navbar;
