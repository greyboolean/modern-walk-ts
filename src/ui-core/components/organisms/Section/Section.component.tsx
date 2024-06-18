import { Loading } from "../../atoms";
import { SectionProps } from "./Section.types";
import styles from "./Section.module.css";

function Section({ heading, loading, children }: SectionProps) {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>{heading}</h1>
			{loading ? <Loading /> : children}
		</div>
	);
}

export default Section;
