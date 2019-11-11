import React from 'react';

const Person = props => {
    return (
        <>
            <p>Ayo what it do I'm {props.name}, I'm {props.age} years old and I'm {props.title}!</p>
            <p>{props.children}</p>
        </>
    );
}

export default Person;