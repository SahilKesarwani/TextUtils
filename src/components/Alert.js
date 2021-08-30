import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alert, mode }) => {
	const { msg, type } = alert;
	const { lightOnLight } = mode;

	return (
		<>
			<div class={`alert alert-${type} bg-${lightOnLight} text-${type} ${msg ? "visible" : "invisible"} sticky-top lh-1`} role="alert">
				{msg || "Alert"}
			</div>
		</>
	);
};

Alert.propTypes = {
	alert: PropTypes.object.isRequired,
};

export default Alert;
