import {Wrapper, Background, InputContainer, ButtonContainer } from './Styles';
import background from '../../assets/images/familia-banner.jpg';
import logoInter from '../../assets/images/interLogo.png';
import Card from '../../components/Card';

const SignIn = () => {
    return(
        <Wrapper>
            <Background image={background} />
            <Card width="403px">
                <img src={logoInter} width={172} heigth={61} alt= "logo inter" /> 
            </Card>

            SignIn
        </Wrapper>
    )
}

export default SignIn;