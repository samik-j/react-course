import React from 'react';
import './Person.css';

const person = ({name, age, color, children, onClick, onChange}) => {
	return (
		<div className="Person">
			<p onClick={onClick}>{name} here and I am {age} years old, I am {color}</p>
			<input type="text" onChange={onChange} value={color}/>
			{/*if it's (props) then this is props.children, children is a reserved keyword*/}
			<p>{children}</p>
		</div>
	)
};

export default person;