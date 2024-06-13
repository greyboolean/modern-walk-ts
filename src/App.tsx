import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./ui-core";
import { Home } from "./ui-core";
import { Clothing } from "./ui-core";
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
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
