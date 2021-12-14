import React from 'react';
import {InputHTMLAttributes} from 'react';
import { InputContainer } from './styles';

const Input = (props: InputHTMLAttributes<HTMLElement) => {

    return (
        <InputContainer>
            <input {...props} />
        </InputContainer>
    )
}

export default Input 
