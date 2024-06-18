import { Link } from "react-router-dom";
import { toTitleCase } from "../../../../utils/utils";
import { CategoryCardProps } from "./CategoryCard.types";
import styles from "./CategoryCard.module.css";

function CategoryCard({ category }: CategoryCardProps) {
	return (
		<div className={`${styles.category} ${styles[category]}`}>
			<Link to={`/${category}s-clothing`}>
				<span className={styles.title}>
					{toTitleCase(category)}&apos;s Clothing
				</span>
			</Link>
		</div>
	);
}

export default CategoryCard;
