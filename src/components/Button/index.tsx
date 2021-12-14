import React from 'react';
import {ButtonHTMLAttributes} from 'react';
import { ButtonContainer } from './styles';

const Button = (props: ButtonHTMLAttributes<HTMLElement) => {

    return (
        <ButtonContainer {...props}>
            {props.children}
        </ButtonContainer>
    )
}

export default Button 
