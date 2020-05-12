import React, { Component } from 'react';
import "./logged.scss";
import NewTask from './NewTask';
import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';



const StyledButton = withStyles({
    root: {
        //background: 'linear-gradient(45deg, #a19d9d 30%, #5c5959 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        //boxShadow: '0 1px 3px 2px rgba(195, 192, 192, .1)',
        marginRight: '5%',

        '&:hover': {
            backgroundColor: "#515151"
        }
    },
    label: {
        textTransform: 'capitalize',
    },

})(Button);

export class Logged extends Component {
    render() {
        return (
            <div className="logged">
                <NavLink to="/newTask" className="none"><StyledButton>NOWE ZADANIE</StyledButton></NavLink>
                <NavLink to="/tasksToDo" className="none" ><StyledButton>ZADANIA DO ZROBIENIA</StyledButton></NavLink>
                <NavLink to="/tasksDone" className="none"><StyledButton>ZADANIA ZROBIONE</StyledButton></NavLink>
            </div >

        )
    }
}

export default Logged