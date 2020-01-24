import React from 'react';
import Radium from 'radium'

const button = ({onClick, key, text, color, clickColor}) => {

	const buttonColor = color ? color : 'darkgreen';
	const buttonClickColor = clickColor ? clickColor : '#1B3A19';

	const style = {
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: buttonColor,
		padding: '8px',
		margin: '5px',
		cursor: 'pointer',
		':hover': {
			backgroundColor: buttonColor,
			color: 'white'
		},
		':focus': {
			outline: 0
		},
		':active': {
			backgroundColor: buttonClickColor,
			borderColor: buttonClickColor
		}
	};

	return (
		<button key={key} onClick={onClick} style={style}>{text}</button>
	)
};

export default Radium(button);