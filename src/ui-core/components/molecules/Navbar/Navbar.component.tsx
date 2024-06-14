import { UserAuth } from "../UserAuth";
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<UserAuth />
		</nav>
	);
}

export default Navbar;
