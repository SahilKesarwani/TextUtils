import React, { useEffect } from "react";
import Accordion from "./Accordion";
import PropTypes from "prop-types";

const Faq = ({ mode }) => {
	const { darkOnLight } = mode;

	useEffect(() => {
		document.title = "TextUtils - FAQ";
	}, []);

	return (
		<>
			<h1 className={`text-${darkOnLight}`}>FAQs</h1>
			<div className={`accordion my-3 text-${darkOnLight}`} id="faqAccordion">
				<Accordion mode={mode} header="How this website works?" body={<>Initially, put some text in the text box then, choose the operation you wants to perform with your text. Then, text summary will provide some details about your text.</>} count="One" accordionId="#faqAccordion" />

				<Accordion
					mode={mode}
					header="Is the website made on ReactJS?"
					body={
						<>
							<strong>Yes,</strong> the website is completely made on ReactJS.
						</>
					}
					count="Two"
					accordionId="#faqAccordion"
				/>

				<Accordion
					mode={mode}
					header="Does this website use any framework for styling?"
					body={
						<>
							<strong>Yes, </strong> the website using Bootstrap for all the styling and for some pre-default functionality provided by Bootstrap.
						</>
					}
					count="Three"
					accordionId="#faqAccordion"
				/>
			</div>
		</>
	);
};

Faq.propTypes = {
	mode: PropTypes.object.isRequired,
};

export default Faq;
