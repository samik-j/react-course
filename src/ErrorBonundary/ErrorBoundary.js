import React, { Component } from 'react';

class ErrorBoundary extends Component {

	state = {
		hasError: false,
		errorMessage: ''
	};

	//this is a method that will be executed if component wrapped in ErrorBoundary is frozen in error
	componentDidCatch = (error, info) => {
		this.setState({
			hasError: true,
			errorMessage: error
		})
	};

	render() {
		if(this.state.hasError) {
			return <h1>Something went wrong</h1>;
		} else {
			return this.props.children; //this.props.children is whatever we wrap with ErrorBoundary
		}
	}
}

export default ErrorBoundary;