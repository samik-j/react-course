import React from 'react';

const ErrorComponent = () => {
	let error = Math.random();

	if (error > 0.7) {
		throw new Error()
	}

	return <h1>Error Component</h1>
};

export default ErrorComponent;