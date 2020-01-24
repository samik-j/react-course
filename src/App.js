import React from 'react';
import './App.css';
import Radium from 'radium'
import Llama from './Llamas/Llama/Llama'
import Llamas from './Llamas/Llamas';
import Cockpit from './Cockpit/Cockpit';

class App extends React.Component {

    state = {
        llamas: [
            {id: '1', name: 'llama', movement: 'jumping', state: 'I am jumping happily', age: Math.floor(Math.random() * 20), color: 'blue'},
            {id: '2', name: 'other llama', movement: 'jumping', state: 'I am jumping happily', age: Math.floor(Math.random() * 20), color: 'blue'},
            {id: '3', name: 'some llama', movement: 'jumping', state: 'I am jumping happily', age: Math.floor(Math.random() * 20), color: 'blue'}
        ],
        age: Math.floor(Math.random() * 20),
		showLlamas: false
    };

    switchLlamaStateHandler = (id) => {
    	const index = this.state.llamas.findIndex(entity => entity.id === id);
		const entity = {...this.state.llamas[index]};

		const newState = entity.state === 'I am jumping happily' ? 'I fell down' : 'I am jumping happily';
		entity.state = newState;
		const entities = [...this.state.llamas];
		entities[index] = entity;

        this.setState({
            llamas: entities
        });
		console.log("change")
    };

    switchAgeHandler = () => {
        this.setState({
            age: Math.floor(Math.random() * 20)
        })
    };

    colorChangeLlamaHandler = (event, id) => {
    	const index = this.state.llamas.findIndex(entity => entity.id === id);
    	const llama = {...this.state.llamas[index]}; //copy properties of the object, instead of modifying the object in state. ALWAYS WORK WITH COPIES FROM THE STATE WHEN UPDATING
		llama.color = event.target.value;

		const llamas = [...this.state.llamas];
		llamas[index] = llama;

		this.setState({
			llamas: llamas
		})
	};

    toggleLlamasHandler = () => {
    	this.setState(previousState => ({
			showLlamas: !previousState.showLlamas
		}))
	};

    deleteLlamaHandler = (index) => {
    	const entities = [...this.state.llamas]; //this copies the list of elements from state, not the list from state
    	entities.splice(index, 1);
    	this.setState( {llamas: entities})
	};

    render() {
    	let llamas = null;
    	if (this.state.showLlamas) {
			llamas = (
				<div>
					<Llama name="llama" age={2} color="red">This is inside</Llama>
					<Llama name="llama with changeable age" age={this.state.age} color="black" onClick={this.switchAgeHandler}/>
					<Llamas llamas={this.state.llamas} onClick={this.deleteLlamaHandler} onButtonClick={this.switchLlamaStateHandler} onChange={this.colorChangeLlamaHandler}/>
				</div>
			);
		}

        return (
            <div className="App">
				<Cockpit showLlamas={this.state.showLlamas} llamasLength={this.state.llamas.length} onClick={this.toggleLlamasHandler}/>
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
