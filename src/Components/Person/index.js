import React from 'react';
import './index.css';

const Person = props => {
    return (
        <div className="person">
            <p onClick={props.onClick}>Ayo what it do I'm {props.name}, I'm {props.age} years old and I'm {props.title}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.onChanged} value={props.name} />
        </div>
    );
}

export default Person;