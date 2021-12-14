import {Wrapper, Background, InputContainer, ButtonContainer } from './Styles';
import background from '../../assets/images/familia-banner.jpg';
import logoInter from '../../assets/images/interLogo.png';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Link, useNavigate} from 'react-router-dom';

const SignIn = () => {
    
    const navigate = useNavigate();

    const handleToSignIn = () => {
        navigate('/deashboard')
    }

    return(
        <Wrapper>
            <Background image={background} />
            <Card width="403px">
                <img src={logoInter} width={172} heigth={61} alt= "logo inter" /> 

                <InputContainer>
                    <Input placeholder="EMAIL" />
                    <Input placeholder="SENHA" type="password" />
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSignIn}>Entrar</Button>
                    <p>Ainda nao eh cadastrado <Link to="/signup">Cadastre-se Ja</Link> < /p>
                </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn;