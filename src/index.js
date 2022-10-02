import React from 'react'
import ReactDOM from "react-dom"
import App from './component/functionBased/App'
import "./scss/main.css";
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </React.StrictMode>, document.getElementById("root"));


