import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const AppFunctionalComponentWithHooks = props => {
    // useState returns an array of two things. First one is the state, second one is a function to be used when changing the state
    // this is destructuring so i can specify the names for the two things that get returned
    const [ entitiesState, setEntitiesState ] = useState({
        entities: [
            {name: "llama", movement: "jumping", state: "I am jumping happily"},
            {name: "other llama", movement: "jumping", state: "I am jumping happily"}
        ]
    });

    // if otherStateThingy was in entitiesState then it would be erased on setEntitiesState (if it doesn't set it) that has only entities inside
    // so one state per "property"
    const [ otherStateThingy, setOtherStateThingy ] = useState({
        otherStateThingy: "other thingy"
    });

    const switchEntityHandler = () => {
        const newState = entitiesState.entities[0].state === 'I am jumping happily' ? 'I fell down' : 'I am jumping happily';
        // setState does not keep old state, it will completely override everything, so you need to pass the old state
        // so i should have multiple useState, one for each object/each "slice" of state that we want to update
        setEntitiesState({
            entities: [
                {name: 'llama', movement: 'jumping', state: newState},
                {name: entitiesState.entities[1].name, movement: 'jumping', state: entitiesState.entities[1].state}
            ]
        })
    };

    return (
        <div className="App">
            <h1>React App</h1>
            <button onClick={switchEntityHandler}>Trip or help</button>
            <Person name="llama">This is inside</Person>
            <Person name={entitiesState.entities[0].name}>{entitiesState.entities[0].state}</Person>
            <Person name={entitiesState.entities[1].name}>{entitiesState.entities[1].state}</Person>
            <p>{otherStateThingy.otherStateThingy}</p>
        </div>
    );
};

export default AppFunctionalComponentWithHooks;

