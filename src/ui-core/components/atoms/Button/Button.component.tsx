import { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

function Button({ children, onClick }: ButtonProps) {
	return <button className={styles.button} onClick={onClick}>{children}</button>;
}
export default Button;
