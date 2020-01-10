import React from 'react'

const person = ({name, age, children, click}) => {
	return (
		<div>
			<p onClick={click}>{name} here and I am {age} years old</p>
			{/*if it's (props) then this is props.children, children is a reserved keyword*/}
			<p>{children}</p>
		</div>
	)
};

export default person;