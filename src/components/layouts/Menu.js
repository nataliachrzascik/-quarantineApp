import React, { Component } from 'react'
import "./menu.scss";
import { FaHeart } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";

import { connect } from 'react-redux';
import { animateIconHeart, animateIconSmile, animateIconBrain } from '../../actions/addPoints';
import { NavLink } from 'react-router-dom';


export class Menu extends Component {
    changeHeartToFalse = () => {
        setTimeout(
            () => { this.props.animateIconHeart() },
            1000
        )
    }
    changeBrainToFalse = () => {
        setTimeout(
            () => { this.props.animateIconBrain() },
            1000
        )
    }
    changeSmileToFalse = () => {
        setTimeout(
            () => { this.props.animateIconSmile() },
            1000
        )
    }
    render() {
        const { name, login, heart, brain, happy } = this.props;
        return (
            <div>
                <nav className="navbar navbar-light bg-dark">
                    <div className="container">

                        <div className="navbar-header col-md-2 col-sm-3">
                            <NavLink to={login ? "/loginSuccess" : "/"}><i className="navbar-brand text-white text-lg brand-text" >Strona Główna</i></NavLink>
                        </div>

                        <ul className="navbar-nav ml-auto text-light d-inline-block col-md-8 col-sm-8">
                            <li className="nav-item d-inline-block mr-5 h4 col-md-2 col-sm-2">
                                <FaHeart className={`${this.props.iconHeart ? "animationHeart" : null} icon`} style={this.props.iconHeart ? this.changeHeartToFalse() : null} /><span className="pl-2 brand-text">lvl.{heart === undefined ? "-" : heart}</span>
                            </li>
                            <li className="nav-item d-inline-block mr-5 h4 col-md-2 col-sm-2">
                                <FaBrain className={`${this.props.iconBrain ? "animationBrain" : null} icon`} style={this.props.iconBrain ? this.changeBrainToFalse() : null} /><span className="pl-2 brand-text">lvl.{brain === undefined ? "-" : brain}</span>
                            </li>
                            <li className="nav-item d-inline-block mr-5 h4 col-md-2 col-sm-2">
                                <FaSmile className={`${this.props.iconSmile ? "animationSmile" : null} icon`} style={this.props.iconSmile ? this.changeSmileToFalse() : null} /><span className="pl-2 brand-text">lvl.{happy === undefined ? "-" : happy}</span>
                            </li>
                        </ul>

                        <div className="navbar-header col-md-2 col-sm-2">
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
        happy: state.name.happy,

        iconBrain: state.name.changeIconBrain,
        iconHeart: state.name.changeIconHeart,
        iconSmile: state.name.changeIconSmile
    }
);

export default connect(mapStateToProps, { animateIconHeart, animateIconBrain, animateIconSmile })(Menu);
