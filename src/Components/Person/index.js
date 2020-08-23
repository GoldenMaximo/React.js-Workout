import React from 'react';
import { PersonDiv } from './styles';

import './index.css';


const Person = props => {
    return (
        <PersonDiv>
            <p onClick={props.onClick}>Ayo what it do I'm {props.name}, I'm {props.age} years old and I'm {props.title}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.onChange} value={props.name} />
        </PersonDiv>
    );
}

export default Person;