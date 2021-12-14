import styled from "styled-components";

export const DashboardBackground = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    align-itens: center;
    justify-content: center;

    background-color: ${({theme}) => theme.colors.background};
`

export const BodyContainer = styled.main`
    width: 80%;
    height: 40px;

    display: flex;
    justify-content: space-between;

    > div{
        flex: 1;

        & > div{
            margin-bottom: 20px;
        }

        & : nth-child(2){
            display: flex;
            justify-content: flex-end;
        }
    }
`

export const InlineTitle = styled.div`
    width: 100%;
    display: flex;
`

export const InlineContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;

    div{
        flex: 4;
        margin-right: 20px;
    }

    button{
        flex: 1;
    }

`