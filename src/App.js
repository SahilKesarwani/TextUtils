import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Faq from "./components/Faq";
import Alert from "./components/Alert";

const App = () => {
	const [mode, setMode] = useState({
		lightOnLight: "light",
		whiteOnLight: "white",
		darkOnLight: "dark",
		buttonColor: "primary",
	});
	const [alert, setAlert] = useState({});

	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => {
			setAlert({});
		}, 1500);
	};

	const toggleMode = () => {
		if (mode.lightOnLight === "light") {
			setMode({
				lightOnLight: "dark",
				whiteOnLight: "black",
				darkOnLight: "light",
				buttonColor: "secondary",
			});
			document.body.style.backgroundColor = "#000";
			showAlert("Dark mode enabled.", "success");
		} else {
			setMode({
				lightOnLight: "light",
				whiteOnLight: "white",
				darkOnLight: "dark",
				buttonColor: "primary",
			});
			document.body.style.backgroundColor = "#fff";
			showAlert("Light mode enabled.", "success");
		}
	};

	return (
		<>
			<Router>
				<div>
					<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
					<Alert alert={alert} mode={mode} />
					<div className="container">
						<Switch>
							<Route path="/" exact>
								<TextForm mode={mode} showAlert={showAlert} />
							</Route>
							<Route path="/faq" exact>
								<Faq mode={mode} />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</>
	);
};

export default App;
