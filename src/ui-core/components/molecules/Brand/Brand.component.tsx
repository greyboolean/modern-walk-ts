import { Link } from "react-router-dom";
import styles from "./Brand.module.css";

function Brand() {
	return (
		<Link to="/" className={styles.brand}>
			<div className={styles.brandText}>Modern Walk</div>
		</Link>
	);
}

export default Brand;
