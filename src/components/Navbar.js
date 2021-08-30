import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title, mode, toggleMode }) => {
	const { lightOnLight, darkOnLight } = mode;

	return (
		<nav className={`navbar navbar-expand-lg navbar-${lightOnLight} bg-${lightOnLight}`}>
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					{title}
				</NavLink>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" exact to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" activeClassName="active" exact to="/faq">
								FAQ
							</NavLink>
						</li>
					</ul>
					<div className={`form-check form-switch text-${darkOnLight}`}>
						<input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggleMode} />
						<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
							Dark Mode
						</label>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	mode: PropTypes.object.isRequired,
	toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
	title: "Title",
};

export default Navbar;
