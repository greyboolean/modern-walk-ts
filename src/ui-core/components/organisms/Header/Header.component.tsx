import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Navbar } from "../../molecules/Navbar";

function Header() {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.brand}>
				<div className={styles.brandText}>Modern Walk</div>
			</Link>
			<Navbar />
		</header>
	);
}

export default Header;
