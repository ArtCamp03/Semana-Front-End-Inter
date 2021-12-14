import {CircleContainer} from './styles';

interface UserInfo{
    initials: string;
}

const UseCircle = ({initials}:UserInfo) => {
    return{
        <CircleContainer>
            {initials}
        </CircleContainer>
    }
}

export default UseCircle;