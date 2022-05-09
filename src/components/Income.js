import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from '../context/UserContext';

export default function Income() {
    const navigate = useNavigate();
    const {user: {token}} = useContext(UserContext);
    const [income, setIncome] = useState({description:"", value:"", type:"income"});

    async function handleIncome(e) {
        e.preventDefault();
        const URL = 'http://localhost:5000/account';
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axios.post(URL, income, config);
            console.log(response);
            navigate('/account');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Div>
            <h1>Nova entrada</h1>
            <form onSubmit={handleIncome}>
                <input 
                    type="text" 
                    placeholder="Valor"
                    required
                    onChange={(value) => setIncome({...income, value:value.target.value})}
                />
                <input 
                    type="text"
                    placeholder="Descrição"
                    required
                    onChange={(description) => setIncome({...income, description:description.target.value})}
                />
                <button type="submit">Salvar Entrada</button>
            </form>
        </Div>
    )
}

// styled components
const Div = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 25px;
    h1 {
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-bottom: 40px;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    input {
        width: 100%;
        height: 58px;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 15px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        margin-bottom: 13px;
        border: none;
    }
    button {
        width: 100%;
        height: 46px;
        border-radius: 5px;
        background-color : #A328D6;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        border: none;
        color: #FFFFFF;
    }
`;