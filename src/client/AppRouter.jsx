import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
const AppRouter = () => {
	return (
		<Router>
			<div>
				<Link to="/">Home</Link>
				<br />
				<Link to="/register">Sign Up</Link>
			</div>
			<Switch>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};
export default AppRouter;
