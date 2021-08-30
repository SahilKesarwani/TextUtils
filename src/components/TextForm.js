import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TextForm = ({ mode, showAlert }) => {
	const { whiteOnLight, darkOnLight, buttonColor } = mode;
	const [text, setText] = useState("");
	const [wordsCount, setWordsCount] = useState(0);
	const [charactersCountWithSpaces, setCharactersCountWithSpaces] = useState(0);
	const [charactersCountWithoutSpaces, setCharactersCountWithoutSpaces] = useState(0);
	const [readTime, setReadTime] = useState(0);
	const [copyBtnText, setCopyBtnText] = useState("Copy to clipboard");
	const [isDisabled, setIsDisabled] = useState(true);
	const [searchText, setSearchText] = useState("");
	const [occurrenceCount, setOccurrenceCount] = useState(0);

	const reset = () => {
		setText("");
		setWordsCount(0);
		setCharactersCountWithSpaces(0);
		setCharactersCountWithoutSpaces(0);
		setReadTime(0);
		setIsDisabled(true);
	};

	useEffect(() => {
		if (!text.endsWith(" ")) {
			const newText = text.split(/\s+/);
			const textWithoutSpaces = newText.join("");
			const textWithoutExtraSpaces = newText.join(" ");
			const counts = textWithoutExtraSpaces.split(/\s+/).filter(ele => ele.length !== 0).length;
			setWordsCount(counts);
			setReadTime(counts * 0.008);
			setCharactersCountWithoutSpaces(textWithoutSpaces.length);
		}
		setCharactersCountWithSpaces(text.length);
		if (text === "") {
			reset();
		}
		setOccurrenceCount(text.split(searchText).length - 1);
	}, [text, searchText]);

	useEffect(() => {
		document.title = "TextUtils - Home";
	}, []);

	const onTextChange = e => {
		const { value } = e.target;
		setText(value);
		setIsDisabled(false);
	};

	const onSearchTextChange = e => {
		const { value } = e.target;
		setSearchText(value);
	};

	const convertUppercase = () => {
		const newText = text.toUpperCase();
		setText(newText);
		showAlert("Converted to UpperCase.", "success");
	};

	const convertLowercase = () => {
		const newText = text.toLowerCase();
		setText(newText);
		showAlert("Converted to LowerCase.", "success");
	};

	const clearText = () => {
		reset();
		showAlert("Text Cleared.", "success");
	};

	const removeSpaces = () => {
		const newText = text.split(/[ ]+/);
		setText(newText.join(" "));
		showAlert("Removed Extra Spaces", "success");
	};

	const copyText = () => {
		const inputTextBox = document.getElementById("inputTextBox");
		inputTextBox.select();
		document.execCommand("copy");
		setCopyBtnText("Copied!");
		setIsDisabled(true);
		showAlert("Text Copied.", "success");

		setTimeout(() => {
			inputTextBox.blur();
			setCopyBtnText("Copy to clipboard");
			setIsDisabled(false);
		}, 1500);
	};

	return (
		<div className={`text-${darkOnLight}`}>
			<div className="container mb-3">
				<div className="mb-2">
					<label htmlFor="inputTextBox" className="form-label">
						<h1>Enter the text to analyze</h1>
					</label>
					<textarea className={`form-control text-${darkOnLight} bg-${whiteOnLight}`} id="inputTextBox" value={text} onChange={onTextChange} spellCheck={false} placeholder="Enter text here" rows="5"></textarea>
				</div>
				<button type="button" className={`btn btn-${buttonColor} m-2`} disabled={isDisabled} onClick={convertUppercase}>
					Convert to UpperCase
				</button>
				<button type="button" className={`btn btn-${buttonColor} m-2`} disabled={isDisabled} onClick={convertLowercase}>
					Convert to LowerCase
				</button>
				<button type="button" className={`btn btn-${buttonColor} m-2`} disabled={isDisabled} onClick={clearText}>
					Clear Text
				</button>
				<button type="button" className={`btn btn-${buttonColor} m-2`} disabled={isDisabled} onClick={removeSpaces}>
					Remove extra spaces
				</button>
				<button type="button" className={`btn btn-${buttonColor} m-2`} disabled={isDisabled} onClick={copyText}>
					{copyBtnText}
				</button>
			</div>

			<div className="container">
				<div className="my-3">
					<h2>Your Text Summary</h2>
					<p>
						<strong>
							{wordsCount} {wordsCount > 1 ? "words" : "word"}
						</strong>
						,{" "}
						<strong>
							{charactersCountWithSpaces} {charactersCountWithSpaces > 1 ? "characters" : "character"}
						</strong>
						(with spaces){" "}
						<strong>
							{charactersCountWithoutSpaces} {charactersCountWithoutSpaces > 1 ? "characters" : "character"}
						</strong>
						(without spaces)
					</p>
					<p>
						Takes{" "}
						<strong>
							{readTime} {readTime > 1 ? "minutes" : "minute"}
						</strong>{" "}
						to read
					</p>
				</div>

				<div className="my-3">
					<h2>Search for occurrence of word</h2>
					<div class="input-group mb-3">
						<input type="text" class={`form-control text-${darkOnLight} bg-${whiteOnLight}`} value={searchText} onChange={onSearchTextChange} placeholder="Search" aria-label="Word occurrence" />
					</div>
					{searchText ? (
						<p>
							<strong>{occurrenceCount} times</strong>
						</p>
					) : null}
				</div>

				<div className="my-3">
					<h2>Preview</h2>
					<p>{text ? text : "Nothing to preview!"}</p>
				</div>
			</div>
		</div>
	);
};

TextForm.propTypes = {
	mode: PropTypes.object.isRequired,
	showAlert: PropTypes.func.isRequired,
};

export default TextForm;
