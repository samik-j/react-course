import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {

    state = {
        entities: [
            {name: 'llama', movement: 'jumping'},
            {name: 'person', movement: 'walking'}
        ]
    };

    render() {
        return (
            <div className="App">
                <h1>React App</h1>
                <Person name="llama" movement="jumping">And this is inside</Person>
                <Person name={this.state.entities[0].name} movement={this.state.entities[0].movement}/>
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
