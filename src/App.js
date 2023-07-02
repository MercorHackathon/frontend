import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./search/Search";
import HomePage from "./pages/homepage/Homepage";
import Navbar from "./components/SideNav/Navbar";
import EmpHome from "./pages/empHome/empHome";

function App() {
	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="app-container">
			<Navbar />
			<Routes>
				<Route
					exact
					path="/"
					element={<HomePage/>}
				/>
				<Route
					exact
					path="/login"
					element= {<HomePage/>}
				/>

				<Route
					exact
					path="/empHome"
					element= {<EmpHome/>}
				/>

        		<Route
					path="/search"
					element={user ? <Navigate to="/" /> : <Search />}
				/>
			</Routes>
		</div>
	);

}

export default App;
