import React, { useState } from 'react';
import './App.css';
import Person from './Components/Person';

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
        const person = {...personsArray[personIndex]};

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
    }

    return (
        <div className="App">
            <h1>What it do pep</h1>
            <button onClick={togglePersonsHandler}>Switch Name!</button>
            {persons}
        </div>
    );
}

export default App;
