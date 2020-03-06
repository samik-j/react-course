import React, { Component } from 'react';
import './Llama.css';

class Llama extends Component  {

	render() {
		return (
			<div className="Llama">
				<p onClick={this.props.onClick}>{this.props.name} here and I am {this.props.age} years old, I am {this.props.color}</p>
				<input type="text" onChange={this.props.onChange} value={this.props.color}/>
				{/*if it's (props) then this is props.children, children is a reserved keyword*/}
				<div>{this.props.children}</div>
			</div>
		)
	}
};

export default Llama;