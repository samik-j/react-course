import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {

    state = {
        entities: [
            {name: 'llama', movement: 'jumping', state: 'I am jumping happily', age: Math.floor(Math.random() * 20)},
        ],
        age: Math.floor(Math.random() * 20),
		color: "blue",
		showLlamas: false
    };

    switchEntityHandler = () => {
        const newState = this.state.entities[0].state === 'I am jumping happily' ? 'I fell down' : 'I am jumping happily';
        this.setState({
            entities: [
                {name: 'llama', movement: 'jumping', state: newState, age: this.state.entities[0].age},
            ]
        })
    };

    switchAgeHandler = () => {
        this.setState({
            age: Math.floor(Math.random() * 20)
        })
    };

    colorChangeHandler = (event) => {
		this.setState({
			color: event.target.value
		})
	};

    toggleLlamasHandler = () => {
    	this.setState(previousState => ({
			showLlamas: !previousState.showLlamas
		}))
	};

    render() {
    	const buttonStyle = {
			border: '1px solid black',
			padding: '8px',
			margin: '5px',
			cursor: 'pointer'
		};

        return (
            <div className="App">
                <h1>Llamas</h1>
				<button onClick={this.toggleLlamasHandler} style={buttonStyle}>{this.state.showLlamas ? "Hide Llamas" : "Show Llamas"}</button>
				{this.state.showLlamas ?
					<div>
						<Person name="llama" age={2} color={this.state.color}>This is inside</Person>
						<Person name="llama with changeable age" age={this.state.age} color={this.state.color} click={this.switchAgeHandler}/>
						<Person name="llama that changes color" age={2} color={this.state.color} change={this.colorChangeHandler}/>
						<Person name={this.state.entities[0].name} age={this.state.entities[0].age} color={this.state.color}>
							<button onClick={this.switchEntityHandler} style={buttonStyle}>Trip or help</button>
							<br/>
							{this.state.entities[0].state}
						</Person>
					</div>
					: null
				}
            </div>
        );
    }

  // return (
  //   <div className="App">
  //     <h1>React App</h1>
  //   </div>
  // );

  // this is equivalent of the above. createElement takes (type, props, any number of children...)
  // if children are html tags then they have to be createElement()
  // this is what the above gets compiled to eventually
  // return React.createElement('div', {className:'App'},
  //     React.createElement('h1', null, 'React App'))
}

export default App;
