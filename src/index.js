import React from 'react'
import ReactDOM from "react-dom"
import TodoContainer from './component/functionBased/TodoContainer';
import "./scss/main.css";
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <TodoContainer />
        </BrowserRouter>
    </React.StrictMode>, document.getElementById("root"));


