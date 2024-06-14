import { Brand } from "../../molecules/Brand";
import { Navbar } from "../../molecules/Navbar";
import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<Brand />
			<Navbar />
		</header>
	);
}

export default Header;
