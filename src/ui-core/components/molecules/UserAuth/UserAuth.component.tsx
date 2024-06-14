import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/clerk-react";
import styles from "./UserAuth.module.css";

export function UserAuth() {
	return (
		<div>
			<SignedOut>
				<SignInButton>
					<button className={styles.signInButton}>Sign In</button>
				</SignInButton>
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</div>
	);
}

export default UserAuth;
