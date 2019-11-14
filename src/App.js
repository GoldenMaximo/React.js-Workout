import React, { useState } from 'react';
import './App.css';
import Person from './Components/Person';

function App() {
    const [personsArray, setPersonsArray] = useState([
        {
            name: 'Thomas Jefferson',
            age: 62,
        },
        {
            name: 'Baldur Cruck',
            age: 29,
        },
        {
            name: 'Habib',
            age: 6
        }
    ]);

    const [showPersons, setShowPersons] = useState(false);

    const deletePersonHandler = personIndex => {
        const newPersonsArray = personsArray.slice();
        newPersonsArray.splice(personIndex, 1);
        setPersonsArray(newPersonsArray);
    };

    const togglePersonsHandler = () => {
        setShowPersons(!showPersons);
    }

    let persons = null;

    if (showPersons) {
        persons = (
            <div>
                {personsArray.map((person, index) => {
                    return <Person
                    name={person.name}
                    age={person.age}
                    title="3rd President of the United States"
                    onClick={() => deletePersonHandler(index)}
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
