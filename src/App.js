import React, { useState } from 'react';
import './App.css';
import Person from './Components/Person';

function App() {
    const [persons, setPersons] = useState([
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

    const switchNameHandler = newName => {
        setPersons([
            {
                name: newName,
                age: 42,
            },
            {
                name: 'Baldur Cruck',
                age: 1077,
            },
            {
                name: 'Habib',
                age: 6
            }
        ])
    }

    const nameChangedHandler = event => {
        setPersons([
            {
                name: 'Thomas Jefferson',
                age: 42,
            },
            {
                name: event.target.value,
                age: 1077,
            },
            {
                name: 'Habib',
                age: 6
            }
        ])
    }

    return (
        <div className="App">
            <h1>What it do pep</h1>
            <button onClick={switchNameHandler.bind(this, 'Jamal')}>Switch Name!</button>
            <Person
                name={persons[0].name}
                age={persons[0].age}
                title="3rd President of the United States"
                onClick={() => switchNameHandler('Jeff')}
            />
            <Person
                name={persons[1].name}
                age={persons[1].age}
                title="a mystical warrior from 4E 201st Tamriel"
                onClick={switchNameHandler.bind(this, 'MaxWell')}
                onChanged={nameChangedHandler}>
                    My hobbies are: Drinking Skooma.
            </Person>
            <Person
                name={persons[2].name}
                age={persons[2].age}
                title="an uncommon household doggo"
            />
        </div>
    );
}

export default App;
