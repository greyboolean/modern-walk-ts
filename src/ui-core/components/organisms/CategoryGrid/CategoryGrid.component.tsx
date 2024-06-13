import CategoryCard from "../../../../components/CategoryCard/CategoryCard";
import styles from "./CategoryGrid.module.css";

function CategoryGrid() {
	return (
		<div className={styles.grid}>
			<CategoryCard category="men" />
			<CategoryCard category="women" />
		</div>
	);
}

export default CategoryGrid;
