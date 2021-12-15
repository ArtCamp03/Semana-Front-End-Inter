import React from 'react';
import {DashboardBackground, BodyContainer, InlineContainer, InlineTitle} from './styles'

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Statement from './Statement';

const Dashboard = () => {

    const wallet = 5000;

    return(
        <DashboardBackground>
            <Header />
            <BodyContainer>
                <div>
                    <Card noShadow width="90" >
                        <InlineTitle>
                            <h2 className='H2'>Saldo Atual </h2>
                        </InlineTitle>
                        <InlineContainer>
                        <h3 className='wallet'>
                                {wallet.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}
                            </h3>
                        </InlineContainer>
                    </Card>
                    <Card noShadow width="90" >
                        <InlineTitle>
                            <h2 className='H2'>Receber Pix </h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex:1}} placeholder="valor"/>
                            <Button>Gerar Codigo</Button>
                        </InlineContainer>
                        <p className='primary-color'>Pix copia e cola</p>
                        <p className='primary-color'>fsadfrghyjytrhdsgrtreae4512</p>
                    </Card>
                    <Card noShadow width="90" >
                        <InlineTitle>
                            <h2 className='H2'>Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex:1}} placeholder="Insira a chave"/>
                            <Button>Pagar PIX</Button>
                        </InlineContainer>
                       
                    </Card>
                </div>
                <div>
                    <Card noShadow width="90" >
                        <InlineTitle>
                            <h2 className='H2'>Extrato da Conta</h2>
                        </InlineTitle>
                        <Statement>

                        </Statement>
                    </Card>
                </div>
            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard