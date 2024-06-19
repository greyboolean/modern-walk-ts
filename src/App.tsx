import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Home, Clothing, Watchlist } from "./ui-core";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/*" element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path="mens-clothing"
						element={<Clothing category="men" />}
					/>
					<Route
						path="womens-clothing"
						element={<Clothing category="women" />}
					/>
					<Route path="watchlist" element={<Watchlist />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
