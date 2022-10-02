import React from 'react';
import { Navbar } from './Navbar';
import { About } from './About';
import TodoContainer from './TodoContainer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/To-Do-App" element={<TodoContainer />}/>                 
                <Route path="/Todo" element={<TodoContainer />}/> 
                <Route path="/about" element={<About />}/>  
            </Routes>
        </>
    )
}

export default App;
