import {Wrapper, Background, InputContainer, ButtonContainer } from './Styles';
import background from '../../assets/images/familia-banner.jpg';
import logoInter from '../../assets/images/interLogo.png';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Link, useNavigate} from 'react-router-dom';

const SignUp = () => {
    
    const navigate = useNavigate();

    const handleToSignUp = () => {
        navigate('/deashboard')
    }

    return(
        <Wrapper>
            <Background image={background} />
            <Card width="403px">
                <img src={logoInter} width={172} heigth={61} alt= "logo inter" /> 

                <InputContainer>
                    <Input placeholder="NOME" />
                    <Input placeholder="SOBRENOME" />
                    <Input placeholder="EMAIL" />
                    <Input placeholder="SENHA" type="password" />
                    <Input placeholder="CONFIRMAR SENHA" type="password" />
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSignUp}>Entrar</Button>
                    <p>Ja tem uma conta? <Link to="/">Entre Ja</Link> < /p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp;