import React from 'react';
import './App.css';
import Llama from './Llamas/Llama/Llama'

class AppClassComponent extends React.Component {

    state = {
        llamas: [
            {name: 'llama', movement: 'jumping', state: 'I am jumping happily'},
        ]
    };

    switchLlamaHandler = () => {
        const newState = this.state.llamas[0].state === 'I am jumping happily' ? 'I fell down' : 'I am jumping happily';
        this.setState({
            llamas: [
                {name: 'llama', movement: 'jumping', state: newState},
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <h1>React App</h1>
                <button onClick={this.switchLlamaHandler}>Trip or help</button>
                <Llama name="llama">This is inside</Llama>
                <Llama name={this.state.llamas[0].name}>{this.state.llamas[0].state}</Llama>
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
