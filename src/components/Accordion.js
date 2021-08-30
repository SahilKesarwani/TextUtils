import React from "react";
import PropTypes from "prop-types";

const Accordion = ({ mode, header, body, count, accordionId }) => {
	const { lightOnLight, whiteOnLight, darkOnLight } = mode;

	return (
		<div className={`accordion-item bg-${whiteOnLight} border-${darkOnLight}`}>
			<h2 className="accordion-header" id={`heading${count}`}>
				<button className={`accordion-button ${count === "One" ? null : "collapsed"} bg-${lightOnLight} text-${darkOnLight}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${count}`} aria-expanded="true" aria-controls={`collapse${count}`}>
					{header}
				</button>
			</h2>
			<div id={`collapse${count}`} className={`accordion-collapse collapse ${count === "One" ? "show" : null}`} aria-labelledby={`heading${count}`} data-bs-parent={accordionId}>
				<div className="accordion-body">{body}</div>
			</div>
		</div>
	);
};

Accordion.propTypes = {
	mode: PropTypes.object.isRequired,
	header: PropTypes.string.isRequired,
	body: PropTypes.node.isRequired,
	count: PropTypes.string.isRequired,
	accordionId: PropTypes.string.isRequired,
};

export default Accordion;
