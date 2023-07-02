import { Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./search/Search";
import HomePage from "./pages/homepage/Homepage";
import Navbar from "./components/SideNav/Navbar";
import EmpHome from "./pages/empHome/empHome";
import BarGraph from "./components/Gfit/bargraph";
import Logout from "./pages/logout/Logout";

function App() {

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
					path="/mental-health"
					element={<Search />}
				/>

				<Route
					path="/physical-health"
					element={<BarGraph />}
				/>
				<Route
					path="/logout"
					element={<Logout />}
				/>
			</Routes>
		</div>
	);

}

export default App;
