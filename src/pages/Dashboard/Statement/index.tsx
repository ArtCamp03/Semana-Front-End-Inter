import React from 'react';
import {StatementItemContainer, StatementItemImage, StatementItemInfo, StatementContainer} from '../styles';
import {format} from 'date-fns'; 
import {FiDollarSign} from 'react-icons/fi';

interface StatementItem{
        user: {
            firstName: string,
            lastName: string
        },
            value: number,
            type: 'pay' | 'received' ,
            updatedAt: Date
}
    
 const StatementItem = ({user, value, type, updatedAt}: StatementItem) => {
     return(
         <StatementItemContainer>
             <StatementItemImage type={type}>
                <FiDollarSign size={24}/>

             </StatementItemImage>
             <StatementItemInfo>
                 <p className='primary-color'>{value.toLocaleString('pt-br',{
                     style: 'currency',
                     currency: 'URL'
                 })}</p>
                 <p>{type == 'pay' ? 'Pago a' : 'Recebido de'} <strong>{user.firstName} {user.lastName}</strong></p>
                 <p>{format(updatedAt, "dd/MM/yyyy 'as' HH:mm: 'h' ")}</p>
             </StatementItemInfo>
         </StatementItemContainer>
     )
 }

const Statement = () => {

    const statements: StatementItem [] = [
        {
            user: {
                firstName: 'Joao',
                lastName: 'Antonio'
            },
                value: 250.00,
                type: 'pay' ,
                updatedAt: new Date()
        },
        {
            user: {
                firstName: 'Maria',
                lastName: 'Luiza'
            },
            value: 100.00,
            type: 'received',
            updatedAt: new Date()
        }
    ]

    return(
        <StatementContainer>
            {statements.map(statement => <StatementItem {...statement} />)}
        </StatementContainer>
    )
}

export default Statement;