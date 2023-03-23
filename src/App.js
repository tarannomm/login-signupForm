import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/*' element={<Navigate to='/'/>}/>
            </Routes>
        </div>
    );
};

export default App;