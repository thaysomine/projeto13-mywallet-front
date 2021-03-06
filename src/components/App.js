
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import '../style/reset.css';
import '../style/style.css';

import Login from './Login';
import Signup from './Signup';
import Account from './Account';
import Income from "./Income";
import Outcome from "./Outcome";
import UserContext from '../context/UserContext';

export default function App() {
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/income" element={<Income />} />
                    <Route path="/outcome" element={<Outcome />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}