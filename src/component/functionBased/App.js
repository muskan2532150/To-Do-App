import React from 'react';
import { Navbar } from './Navbar';
import { NotMatch } from './NotMatch';
import { About } from './About';
import TodoContainer from './TodoContainer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<TodoContainer />}/>                 
                <Route path="/Todo" element={<TodoContainer />}/> 
                <Route path="/about" element={<About />}/> 
                <Route path="/NotMatch" element={<NotMatch />} />  
            </Routes>
        </>
    )
}

export default App;
