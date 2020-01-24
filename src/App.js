import React from 'react';
import './App.css';
import Radium from 'radium'
import Person from './Person/Person'
import Button from "./Button/Button";

class App extends React.Component {

    state = {
        entities: [
            {id: '1', name: 'llama', movement: 'jumping', state: 'I am jumping happily', age: Math.floor(Math.random() * 20), color: 'blue'},
            {id: '2', name: 'other llama', movement: 'jumping', state: 'I am jumping happily', age: Math.floor(Math.random() * 20), color: 'blue'},
            {id: '3', name: 'some llama', movement: 'jumping', state: 'I am jumping happily', age: Math.floor(Math.random() * 20), color: 'blue'}
        ],
        age: Math.floor(Math.random() * 20),
		showLlamas: false
    };

    switchEntityHandler = (id) => {
    	const index = this.state.entities.findIndex(entity => entity.id === id);
		const entity = {...this.state.entities[index]};

		const newState = entity.state === 'I am jumping happily' ? 'I fell down' : 'I am jumping happily';
		entity.state = newState;
		const entities = [...this.state.entities];
		entities[index] = entity;

        this.setState({
            entities: entities
        });
		console.log("change")
    };

    switchAgeHandler = () => {
        this.setState({
            age: Math.floor(Math.random() * 20)
        })
    };

    colorChangeLlamaHandler = (event, id) => {
    	const index = this.state.entities.findIndex(entity => entity.id === id);
    	const entity = {...this.state.entities[index]}; //copy properties of the object, instead of modifying the object in state. ALWAYS WORK WITH COPIES FROM THE STATE WHEN UPDATING
		entity.color = event.target.value;

		const entities = [...this.state.entities];
		entities[index] = entity;

		this.setState({
			entities: entities
		})
	};

    toggleLlamasHandler = () => {
    	this.setState(previousState => ({
			showLlamas: !previousState.showLlamas
		}))
	};

    deleteLlamaHandler = (index) => {
    	const entities = [...this.state.entities]; //this copies the list of elements from state, not the list from state
    	entities.splice(index, 1);
    	this.setState( {entities: entities})
	};

    render() {
    	const buttonStyle = {
			border: '2px solid green',
			color: 'green',
			padding: '8px',
			margin: '5px',
			cursor: 'pointer',
			// hover and any :sth are pseudo-selectors. To be able to use them in in-line style use radium
			':hover': {
				backgroundColor:'green',
				color: 'white'
			}
		};

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

    	let llamas = null;
    	if (this.state.showLlamas) {
			llamas = (
				<div>
					<Person name="llama" age={2} color="red">This is inside</Person>
					<Person name="llama with changeable age" age={this.state.age} color="black" onClick={this.switchAgeHandler}/>
					{this.state.entities.map((entity, index) => {
					return <Person key={entity.id} name={entity.name} age={entity.age} color={entity.color} onClick={() => this.deleteLlamaHandler(index)}
								   onChange={(event) => this.colorChangeLlamaHandler(event, entity.id)}>
						<button key={entity.id} onClick={() => this.switchEntityHandler(entity.id)} style={buttonStyle2}>Trip or help</button>
						<Button key={entity.id} onClick={() => this.switchEntityHandler(entity.id)} color='darkblue' clickColor='#050041' text='Trip or help'/>
						<Button key={entity.id} onClick={() => this.switchEntityHandler(entity.id)} text='Trip or help'/>
						<p>{entity.state}</p>
					</Person>
				})
				}
				</div>
			);

			buttonStyle.border = '2px solid red';
			buttonStyle.color = 'red';
			buttonStyle[':hover'] = {
				backgroundColor: 'red',
				color: 'white'

			}
		}

    	let style = [];
    	if(this.state.entities.length <= 2) {
    		style.push('dark-red')
    	}
    	if(this.state.entities.length <= 1) {
    		style.push('red')
    	}

        return (
            <div className="App">
                <h1 className={style.join(' ')}>Llamas</h1>
				<button style={buttonStyle} onClick={this.toggleLlamasHandler}>{this.state.showLlamas ? "Hide Llamas" : "Show Llamas"}</button>
				{llamas}
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

export default Radium(App);
