import React, { Component } from 'react'
import Welcome from "../Welcome";
import Login from "../Login";
import Logged from "../Logged";
import BackGround from "../Background";
import LogOut from "../LogOut";
import Menu from "./Menu";
import NewTask from "../NewTask";
import TasksToDo from "../TasksToDo";
import TasksDone from "../TasksDone";
import Movie from "../NewTasks/Movie";
import Good from "../NewTasks/Good";
import Book from "../NewTasks/Book";
import { NavLink, Switch, Route, BrowserRouter } from "react-router-dom";
import { connect } from 'react-redux';


export class Main extends Component {
    render() {
        const { login } = this.props;
        return (
            <>
                <Menu />
                {login ? <Logged /> : null}
                <Switch>
                    <Route path="/" exact component={Welcome} />
                    <Route path="/login" component={Login} />
                    <Route path="/logOut" component={LogOut} />

                    <Route path="/loginSuccess" component={BackGround} />

                    <Route path="/newTask" component={NewTask} />
                    <Route path="/tasksToDo" component={TasksToDo} />
                    <Route path="/tasksDone" component={TasksDone} />

                    <Route path="/newBook" component={Book} />
                    <Route path="/newGoodTask" component={Good} />
                    <Route path="/newMovie" component={Movie} />

                </Switch>

            </>
        )
    }
}

const mapStateToProps = state => (
    {
        login: state.name.login
    }
);

export default connect(mapStateToProps)(Main);
