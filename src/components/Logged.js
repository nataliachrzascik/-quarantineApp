import React, { Component } from 'react';
import "./logged.scss";
import NewTask from './NewTask';
import { NavLink } from "react-router-dom";

export class Logged extends Component {
    render() {
        return (
            <div id="containerMain">
                <h1 className="p-3">Panel użytkownika</h1>
                <NavLink to="newTask" > <div className="border d-inline-block col-md-3 m-2 p-3  gradientBackground task">NOWE ZADANIE</div ></NavLink>
                <NavLink to="tasksToDo" ><div className="border d-inline-block col-md-3 m-2 p-3  gradientBackground task">ZADANIA DO ZROBIENIA</div></NavLink>
                <NavLink to="tasksDone" ><div className="border d-inline-block col-md-3 m-2 p-3  gradientBackground task">ZADANIA ZROBIONE</div></NavLink>
                <h2 className="p-3">A może nowy pomysł na dziś?</h2>
            </div>

        )
    }
}

export default Logged