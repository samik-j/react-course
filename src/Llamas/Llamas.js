import React from 'react';
import Llama from "./Llama/Llama";
import Button from "../Button/Button";

const llamas = ({llamas, onClick, onButtonClick, onChange}) => {

	const buttonStyle2 = {
		border: '2px solid black',
		padding: '8px',
		margin: '5px',
		cursor: 'pointer',
		':hover': {
			backgroundColor:'black',
			color: 'white'
		}
	};

	return (
		llamas.map((llama, index) => {
				return <Llama key={llama.id} name={llama.name} age={llama.age} color={llama.color} onClick={() => onClick(index)}
							  onChange={(event) => onChange(event, llama.id)}>
					<button key={llama.id} onClick={() => onButtonClick(llama.id)} style={buttonStyle2}>Trip or help</button>
					<Button key={llama.id} onClick={() => onButtonClick(llama.id)} color='darkblue' clickColor='#050041' text='Trip or help'/>
					<Button key={llama.id} onClick={() => onButtonClick(llama.id)} text='Trip or help'/>
					<p>{llama.state}</p>
				</Llama>
			})
	)
};

export default llamas;