import { ReactNode } from "react";
import Loading from "../Loading/Loading";
import styles from "./Section.module.css";

type SectionProps = {
	heading: string;
	loading?: boolean;
	children: ReactNode
}

function Section({ heading, loading, children }: SectionProps) {
	return (
		<div className={styles.section}>
			<h1 className={styles.heading}>{heading}</h1>
			{loading ? <Loading /> : children}
		</div>
	);
}

export default Section;
