import React from 'react';
import {DashboardBackground, BodyContainer, InlineContainer, InlineTitle} from './styles'

import Header from '../../components/Header';

const Dashboard = () => {

    const wallet = 5000;

    return(
        <DashboardBackground>
            <Header />
            <BodyContainer>
                <div>
                    <Card noShadow width="90" >
                        <InlineTitle>
                            <h3 className='wallet'>
                                {wallet.toLocaleString('pt-BR', {style: 'currency', })}
                            </h3>
                        </InlineTitle>
                    </Card>
                </div>
            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard