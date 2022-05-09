import styled from 'styled-components'
import { useContext } from 'react';

import UserContext from '../context/UserContext';
import sair from '../assets/sair.svg';
import entrada from '../assets/entrada.svg';
import saida from '../assets/saida.svg';

export default function Account() {
    const {user: {name, token}} = useContext(UserContext);
    return (
        <Div>  
            <Header>
                <h1>Olá, {name}</h1>
                <img src={sair} alt="sair" />
            </Header>
            <Main>
                <h2>Não há registros de entrada ou saída</h2>
            </Main>
            <Footer>
                <div>
                    <img src={entrada} alt="entrada" />
                    <h3>Nova <br></br> entrada</h3>
                </div>
                <div>
                    <img src={saida} alt="saida" />
                    <h3>Nova <br></br> saída</h3>
                </div>
            </Footer>
        </Div>
    )
}

// styled components
const Div = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8C11BE;
    box-sizing: border-box;
    padding: 25px;
    display: flex;
    flex-direction: column;
    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
`;
const Main = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
`;
const Footer = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 155px; 
    gap: 0px 15px;
    div {
        width: 100%;
        position: relative;
        height: 155px;
        background-color: #A328D6;
        border-radius: 5px;
    }
    img {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 9px;
        left: 9px;
    }
    h3 {
        width: 100%;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
`;
