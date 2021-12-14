import styled from "styled-components";
import { Column } from "typeorm";

export const CardContainer = styled.div<{
    width: string;
    height: string;
    noShadow: boolean;
}>`

width: ${(props) => props.width};
height: ${(props) => props.height};
backgroud: ${({theme}) theme.colors.background};

${(props) => !props.noShadow && css `
    box-shadow: 5px 4px 6px rgba(0,0,0,0.25);
`}

border-radius: 20px ;
padding: 20px;
display: flex;
align-itens: center ;
flex-direction: Column;
z-index: 5000;

`
