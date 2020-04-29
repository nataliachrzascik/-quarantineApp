import React, { Component } from 'react'
import "./menu.scss";
import { FaHeart } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export class Menu extends Component {
    render() {
        const { name, login, heart, brain, happy } = this.props;
        return (
            <div>
                <nav className="navbar navbar-light bg-dark">
                    <div className="container">

                        <div className="navbar-header col-md-2">
                            <NavLink to={login ? "/loginSuccess" : "/"}><i className="navbar-brand text-white text-lg brand-text" >Strona Główna</i></NavLink>
                        </div>

                        <ul className="navbar-nav ml-auto text-light d-inline-block col-md-8">
                            <li className="nav-item d-inline-block mr-5 h4 col-md-2">
                                <FaHeart /><span className="pl-2">lvl.{heart === undefined ? "-" : heart}</span>
                            </li>
                            <li className="nav-item d-inline-block mr-5 h4 col-md-2">
                                <FaBrain /><span className="pl-2">lvl.{brain === undefined ? "-" : brain}</span>
                            </li>
                            <li className="nav-item d-inline-block mr-5 h4 col-md-2">
                                <FaSmile /><span className="pl-2">lvl.{happy === undefined ? "-" : happy}</span>
                            </li>
                        </ul>

                        <div className="navbar-header col-md-2">
                            <NavLink to={login ? "/logOut" : "/login"}><i className="navbar-brand text-white text-lg brand-text logIn p-2">{login ? "Wyloguj się" : "Zaloguj się"}</i></NavLink>
                            <div className="text-white text-lg brand-text">{name ? name : "Nieznajomy"}</div>
                        </div>
                    </div>
                </nav>
            </div >


        )
    }
}

const mapStateToProps = state => (
    {
        name: state.name.name,
        login: state.name.login,
        heart: state.name.heart,
        brain: state.name.brain,
        happy: state.name.happy
    }
);

export default connect(mapStateToProps)(Menu);
