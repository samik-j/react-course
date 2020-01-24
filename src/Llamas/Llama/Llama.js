import React from 'react';
import './Llama.css';

const llama = ({name, age, color, children, onClick, onChange}) => {
	return (
		<div className="Llama">
			<p onClick={onClick}>{name} here and I am {age} years old, I am {color}</p>
			<input type="text" onChange={onChange} value={color}/>
			{/*if it's (props) then this is props.children, children is a reserved keyword*/}
			<div>{children}</div>
		</div>
	)
};

export default llama;