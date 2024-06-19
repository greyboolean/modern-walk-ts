import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

function useLocalStorage<T>(key: string, initialState: T): [T, React.Dispatch<React.SetStateAction<T>>] {
	const { user, isLoaded } = useUser();
	const [value, setValue] = useState(initialState);

	useEffect(() => {
		if (isLoaded && user) {
			const storedValue = localStorage.getItem(`${user.id}-${key}`);
			if (storedValue) {
				setValue(JSON.parse(storedValue));
			}
		}
	}, [isLoaded, user, key]);

	useEffect(() => {
		if (user) {
			localStorage.setItem(`${user.id}-${key}`, JSON.stringify(value));
		}
	}, [value, user, key]);

	return [value, setValue];
}

export default useLocalStorage;
