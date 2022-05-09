
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Login from './Login';
import '../style/reset.css';
import '../style/style.css';
//import Signup from './Signup';
//import Account from './Account';

export default function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </BrowserRouter>
    )
}

// <Route path="/signup" element={<Signup />} />
// <Route path="/account" element={<Account />} />