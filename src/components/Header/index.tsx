import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";

import logoInter from '../../assets/images/InterLogo.png';
import { useNavigate } from "react-router-dom";
import UseCircle from "../UseCircle";

const Header = () =>{

    const navigate = useNavigate();

    const handleLogoff = () =>{
        navigate('/');
    }

    return(
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoInter} width={172}height={61} alt="logo Inter" />
                <UserInfo>
                    <UseCircle initials="PF" /> 
                    <div>
                        <p> Ola. <span className="primary-color font-bold">Artur</span> </p>
                        <strong>4587812 </strong>
                        <a href="#" onClick={handleLogoff} >Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header 