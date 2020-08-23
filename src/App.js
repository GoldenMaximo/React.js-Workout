import React, { useState } from 'react';
import './App.css';
import Person from './Components/Person';
import styled from 'styled-components';

// This is trash. Putting css code inside the app.js.
// I hope the tutorial gets better.
const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
    }
`;

function App() {
    const [personsArray, setPersonsArray] = useState([
        {
            id: 'President',
            name: 'Thomas Jefferson',
            age: 62,
        },
        {
            id: 'WageMage',
            name: 'Baldur Cruck',
            age: 29,
        },
        {
            id: 'Doggoloiyoco',
            name: 'Habib',
            age: 6
        }
    ]);

    const [showPersons, setShowPersons] = useState(false);

    const deletePersonHandler = personIndex => {
        const newPersonsArray = [...personsArray];
        newPersonsArray.splice(personIndex, 1);
        setPersonsArray(newPersonsArray);
    };

    const togglePersonsHandler = () => {
        setShowPersons(!showPersons);
    }

    const nameChangedHandler = (event, id) => {
        const personIndex = personsArray.findIndex(element => element.id === id);
        const person = { ...personsArray[personIndex] };

        person.name = event.target.value;

        const persons = [...personsArray];
        persons[personIndex] = person;

        setPersonsArray(persons);
    }

    let persons = null;

    if (showPersons) {
        persons = (
            <div>
                {personsArray.map((person, index) => {
                    return <Person
                        onClick={() => deletePersonHandler(index)}
                        onChange={event => nameChangedHandler(event, person.id)}
                        name={person.name}
                        age={person.age}
                        title="3rd President of the United States"
                        key={person.id}
                    />
                })}
            </div>
        );

        // buttonStyle.backgroundColor = 'red';
        // buttonStyle[':hover'] = {
        //     backgroundColor: 'salmon',
        //     color: 'black'
        // }
    }

    const clasess = [];
    if (personsArray.length <= 2) {
        clasess.push('red');
    }
    if (personsArray.length <= 1) {
        clasess.push('green');
    }

    return (
        <div className="App">
            <h1 className={clasess.join(' ')}>What it do peep</h1>
            <StyledButton alt={showPersons} onClick={togglePersonsHandler}>Show other peeps!</StyledButton>
            {persons}
        </div>
    );
}

export default App;
