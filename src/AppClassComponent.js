import React from 'react';
import './App.css';
import Person from './Person/Person'

class AppClassComponent extends React.Component {

    state = {
        entities: [
            {name: 'llama', movement: 'jumping', state: 'I am jumping happily'},
        ]
    };

    switchEntityHandler = () => {
        const newState = this.state.entities[0].state === 'I am jumping happily' ? 'I fell down' : 'I am jumping happily';
        this.setState({
            entities: [
                {name: 'llama', movement: 'jumping', state: newState},
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>React App</h1>
                <button onClick={this.switchEntityHandler}>Trip or help</button>
                <Person name="llama">This is inside</Person>
                <Person name={this.state.entities[0].name}>{this.state.entities[0].state}</Person>
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

export default AppClassComponent;
