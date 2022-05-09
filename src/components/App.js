
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Login from './Login';
import Signup from './Signup';
import '../style/reset.css';
import '../style/style.css';
//import Signup from './Signup';
//import Account from './Account';

export default function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                </Routes>
            </BrowserRouter>
    )
}

// 
// <Route path="/account" element={<Account />} />