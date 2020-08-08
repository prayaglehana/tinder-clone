import React from "react";
import "./App.css";
import Header from "./Header";
import {  Router, Switch, Route } from "react-router";

function App() {
	return (
		<div className="App">
			<Header />
			<Router>
				<Switch>
					<Route path="/chat">
						<h1>fas</h1>
					</Route>
					<Route path="/">
						<h1>fas</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
