import React, { useState } from 'react';
import './App.css';
import Llama from './Llamas/Llama/Llama'

const AppFunctionalComponentWithHooks = props => {
    // useState returns an array of two things. First one is the state, second one is a function to be used when changing the state
    // this is destructuring so i can specify the names for the two things that get returned
    const [ llamasState, setLlamasState ] = useState({
        llamas: [
            {name: "llama", movement: "jumping", state: "I am jumping happily"},
            {name: "other llama", movement: "jumping", state: "I am jumping happily"}
        ]
    });

    // if otherStateThingy was in llamasState then it would be erased on setllamasState (if it doesn't set it) that has only llamas inside
    // so one state per "property"
    const [ otherStateThingy, setOtherStateThingy ] = useState({
        otherStateThingy: "other thingy"
    });

    const switchLlamaHandler = () => {
        const newState = llamasState.llamas[0].state === 'I am jumping happily' ? 'I fell down' : 'I am jumping happily';
        // setState does not keep old state, it will completely override everything, so you need to pass the old state
        // so i should have multiple useState, one for each object/each "slice" of state that we want to update
        setLlamasState({
            llamas: [
                {name: 'llama', movement: 'jumping', state: newState},
                {name: llamasState.llamas[1].name, movement: 'jumping', state: llamasState.llamas[1].state}
            ]
        })
    };

    return (
        <div className="App">
            <h1>React App</h1>
            <button onClick={switchLlamaHandler}>Trip or help</button>
            <Llama name="llama">This is inside</Llama>
            <Llama name={llamasState.llamas[0].name}>{llamasState.llamas[0].state}</Llama>
            <Llama name={llamasState.llamas[1].name}>{llamasState.llamas[1].state}</Llama>
            <p>{otherStateThingy.otherStateThingy}</p>
        </div>
    );
};

export default AppFunctionalComponentWithHooks;

