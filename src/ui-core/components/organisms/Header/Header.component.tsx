import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { UserAuth } from "../../molecules/UserAuth";

function Header() {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.brand}>
				<div className={styles.brandText}>Modern Walk</div>
			</Link>
			<nav className={styles.nav}>
				<UserAuth />
			</nav>
		</header>
	);
}

export default Header;
