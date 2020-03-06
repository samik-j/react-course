import React, { Component } from 'react';
import Llama from "./Llama/Llama";
import Button from "../Button/Button";
import Radium from 'radium'

class Llamas extends Component {

	static getDerivedStateFromProps(props, state) {
		return state;
	}

	shouldComponentUpdate(nextProps, nextState) {
		// Can compare current props/state with nextProps/State and decide if it should update

		// This compares pointers, because in App.js I always create a copy before modifying the there is a new pointer in nextProps so this will work
		// If I didn't copy the list then the pointer and just modified it, it would stay the same and so it would not update
		if(nextProps.llamas === this.props.llamas) {
			return false;
		}
		return true;
	}

	render () {
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
			this.props.llamas.map((llama, index) => {
				return <Llama key={llama.id} name={llama.name} age={llama.age} color={llama.color} onClick={() => this.props.onClick(index)}
							  onChange={(event) => this.props.onChange(event, llama.id)}>
					<button key={llama.id} onClick={() => this.props.onButtonClick(llama.id)} style={buttonStyle2}>Trip or help</button>
					<Button key={llama.id} onClick={() => this.props.onButtonClick(llama.id)} color='darkblue' clickColor='#050041' text='Trip or help'/>
					<Button key={llama.id} onClick={() => this.props.onButtonClick(llama.id)} text='Trip or help'/>
					<p>{llama.state}</p>
				</Llama>
			})
		)
	}
};

export default Radium(Llamas);