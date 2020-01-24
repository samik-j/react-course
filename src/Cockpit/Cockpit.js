import React from 'react';
import Radium from 'radium'
import './Cockpit.css';

const cockpit = ({showLlamas, llamasLength, onClick}) => {

	const buttonStyle = {
		border: '2px solid green',
		color: 'green',
		padding: '8px',
		margin: '5px',
		cursor: 'pointer',
		// hover and any :sth are pseudo-selectors. To be able to use them in in-line style use radium
		':hover': {
			backgroundColor:'green',
			color: 'white'
		}
	};

	let style = [];
	if(llamasLength <= 2) {
		style.push('dark-red')
	}
	if(llamasLength <= 1) {
		style.push('red')
	}

	if(showLlamas) {
		buttonStyle.border = '2px solid red';
		buttonStyle.color = 'red';
		buttonStyle[':hover'] = {
			backgroundColor: 'red',
			color: 'white'

		};
	}
	return (
		<div>
			<h1 className={style.join(" ")}>Llamas</h1>
			<button style={buttonStyle} onClick={onClick}>{showLlamas ? "Hide Llamas" : "Show Llamas"}</button>
		</div>
	)
};

export default Radium(cockpit);