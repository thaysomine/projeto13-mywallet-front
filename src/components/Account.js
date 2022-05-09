import styled from 'styled-components'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import UserContext from '../context/UserContext';
import sair from '../assets/sair.svg';
import entrada from '../assets/entrada.svg';
import saida from '../assets/saida.svg';

export default function Account() {
    const navigate = useNavigate();
    const [userBalance, setUserBalance] = useState([]);
    const {user: {name, token}} = useContext(UserContext);
    let balance = 0;
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const URL = 'http://localhost:5000/account';
        const promise = axios.get(URL, config);
        promise.then(response => {
            console.log(response.data);
            setUserBalance(response.data);
        });
        promise.catch(error => {
            console.log(error);
        });
    }, []);
    console.log(userBalance.length);
    const main = userBalance.length;

    function handleLogout() {
        localStorage.removeItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const URL = 'http://localhost:5000/logout';
        const promise = axios.delete(URL, config);
        promise.then(response => {
            console.log(response.data);
            navigate('/');
        });
        promise.catch(error => {
            console.log(error);
        });
    }
    return (
        <Div>  
            <Header>
                <h1>Olá, {name}</h1>
                <img src={sair} alt="sair" onClick={handleLogout}/>
            </Header>
            <Main wrap={main}>
                {userBalance.length === 0 ? (
                    <h2>Não há registros de <br></br> entrada ou saída</h2>
                ) : (
                    <>{userBalance.map(({ date, description, value, type }) => {
                        if (type === 'income') {
                            balance += parseFloat(value);
                        } else {
                            balance -= parseFloat(value);
                        }
                        console.log(balance.toFixed(2));
                        const newValue = parseFloat(value).toFixed(2);
                        return (
                            <>
                                <h4>
                                    <p className='date'>{date}</p>
                                    <p className='description'>{description}</p>
                                    <p className={type === 'income' ? 'value green' : 'value red'}>{newValue}</p>
                                </h4>
                            </>
                        )
                    })}
                        <div className='balance'>
                            <p>SALDO</p>
                            <p className={balance < 0 ? 'value red' : 'value green'}>{balance.toFixed(2)}</p>
                        </div>
                    </>
                )}
            </Main>
            <Footer>
                <div onClick={() => navigate('/income')}>
                    <img src={entrada} alt="entrada" />
                    <h3>Nova <br></br> entrada</h3>
                </div>
                <div onClick={() => navigate('/outcome')}>
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
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.wrap === 0 ? 'center' : 'flex-start'};
    box-sizing: border-box;
    padding: 12px;
    position: relative;
    h2 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: #868686;
    }
    h4 {
        display: flex;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 15px;
        color: #000000;
    }
    .green, p.green{
        color: #03AC00;
    }
    .red, p.red{
        color: #C70000;
    }
    p.date {
        color: #C6C6C6;
    }
    p.description {
        margin-left: 10px;
    }
    p.value {
        width: 100%;
        text-align: right;
    }
    .balance {
        width: 92%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 10px;
        left: 15px;
    }
    .balance p {
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
    }
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
