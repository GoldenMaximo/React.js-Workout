import React from 'react';
import Radium from 'radium';

import './index.css';


const Person = props => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px',
        }
    };

    return (
        <div className="person" style={style}>
            <p onClick={props.onClick}>Ayo what it do I'm {props.name}, I'm {props.age} years old and I'm {props.title}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.onChange} value={props.name} />
        </div>
    );
}

export default Radium(Person);