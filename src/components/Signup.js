import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    async function handleSignup(e) {
        e.preventDefault();
        const URL = 'http://localhost:5000/sign-up';

        try {
            const response = await axios.post(URL, signup);
            console.log(response);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Div>
        <h1>MyWallet</h1>
        <form onSubmit={handleSignup}>
            <input 
                type="text" 
                placeholder="Nome" 
                required
                onChange={(name) => setSignup({...signup, name:name.target.value})}
            />
            <input 
                type="text" 
                placeholder="E-mail"
                required
                onChange={(email) => setSignup({...signup, email:email.target.value})} 
            />
            <input 
                type="password" 
                placeholder="Senha"
                required
                onChange={(password) => setSignup({...signup, password:password.target.value})}  
            />
            <input 
                type="password"
                placeholder="Confirme a senha"
                required
                onChange={(confirmPassword) => setSignup({...signup, confirmPassword:confirmPassword.target.value})} 
            />
            <button type="submit">Cadastrar</button>
        </form>
        <Link to="/">
            <p>Já tem uma conta? Entre agora!</p>
        </Link>
    </Div>
    )
}

// styled components
const Div = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding-left: 25px;
    padding-right: 25px;
    h1 {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;      
        margin-bottom: 24px;
        color: #FFFFFF;
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    input {
        width: 100%;
        height: 58px;
        border-radius: 5px;
        margin-bottom: 13px;
        padding: 15px;
        box-sizing: border-box;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
    }
    button {
        width: 100%;
        height: 46px;
        background-color: #A328D6;
        border-radius: 5px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;    
        color: #FFFFFF;
        border: none;
    }
    p {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px; 
        color: #FFFFFF; 
        margin-top: 36px;
    }
`;