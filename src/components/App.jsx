import React, { useState } from "react";
import QRCode from "react-qr-code";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [qrValue, setQrValue] = useState("");

	function handleChange(event) {
		console.log(event.target.value);
		setInputValue(event.target.value);
	}

	function handleClick() {
		setQrValue(inputValue);
		setInputValue("");
	}

	return (
		<div className="app-container">
			<h1>QR Code Generator</h1>
			<div className="input-div">
				<input
					type="text"
					placeholder="Enter your value here"
					name="inputName"
					value={inputValue}
					onChange={(event) => handleChange(event)}
				/>
				<button
					disabled={
						inputValue && inputValue.trim() !== "" ? false : true
					}
					onClick={handleClick}>
					Generate
				</button>
			</div>
			<div className="qr-code">
				<QRCode
					id="qr-code"
					bgColor="#fff"
					size={240}
					value={qrValue}
				/>
			</div>
		</div>
	);
}

export default App;

//  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
