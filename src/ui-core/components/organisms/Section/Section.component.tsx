import Loading from "../../atoms/Loading/Loading.component";
import styles from "./Section.module.css";
import { SectionProps } from "./Section.types";

function Section({ heading, loading, children }: SectionProps) {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>{heading}</h1>
			{loading ? <Loading /> : children}
		</div>
	);
}

export default Section;
