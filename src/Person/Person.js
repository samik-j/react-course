import React from 'react'

const person = ({name, movement, children}) => {
	return (
		<div>
			<p>{name} here and I am {Math.floor(Math.random() * 20)} years old and I move by {movement}</p>
			{/*if it's (props) then this is props.children, children is a reserved keyword*/}
			<p>{children}</p>
		</div>
	)
};

export default person;