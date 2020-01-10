import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {

    state = {
        entities: [
            {name: 'llama', movement: 'jumping', state: 'I am jumping happily', age: Math.floor(Math.random() * 20)},
        ],
        age: Math.floor(Math.random() * 20)
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

    switchSpecificAgeHandler = (newAge) => {
        this.setState({
            age: newAge
        })
    };

    render() {
        return (
            <div className="App">
                <h1>React App</h1>
                <Person name="llama" age={2}>This is inside</Person>
                <Person name="llama with changeable age" age={this.state.age} click={this.switchAgeHandler}/>
                {/*Passing argument to a function*/}
                {/*When using arrow function a function is returned. It's an anonymous function which will be executed on click.
                It can be inefficient as react might render too often, it's better to use bind syntax*/}
                {/*<Person name="llama with changeable age" age={this.state.age} click={() => this.switchSpecificAgeHandler(4)}/>*/}
                {/*<Person name="llama with changeable age" age={this.state.age} click={this.switchSpecificAgeHandler.bind(this, 5)}/>*/}
                <Person name={this.state.entities[0].name} age={this.state.entities[0].age}>
                    <button onClick={this.switchEntityHandler}>Trip or help</button>
                    <br/>
                    {this.state.entities[0].state}
                </Person>


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
