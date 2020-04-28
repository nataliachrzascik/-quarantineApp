import React, { Component } from 'react';
import "./login.scss";

import { login } from '../actions/loginAction';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

export class Login extends Component {
    state = {
        tempName: undefined,
        user: {
            name: "",
            login: false,
            heart: undefined,
            brain: undefined,
            happy: undefined

        }
    }
    onChange = (e) => {
        this.setState({
            tempName: e.target.value
        })

    }
    LogMe = (e) => {
        e.preventDefault();
        //czy w bazie jest taki login? jesli tak to pobierz jego dane
        //jesli w bazie nie ma takiego loginu to:

        this.setState({
            user: {
                name: "",
                login: false,
                heart: 0,
                brain: 0,
                happy: 0
            }
        })
        this.props.login(this.state.tempName);
        //przekazanie tekstu z iputa do akcji sprawdzajacej
        this.props.history.push('/loginSuccess');
    }
    render() {
        return (
            <div id="containerMain">
                <div className="gradientBackground p-5 radius col-md-6 m-auto">
                    <form onSubmit={this.LogMe}>
                        <div className="form-group m-2 p-4">
                            <label className="h3 userName" htmlFor="inputNick">TWOJA NAZWA UŻYTKOWNIKA</label>
                            <input type="text" onChange={this.onChange} className="form-control" id="inputNick" placeholder="Wprowadź nick">
                            </input>
                        </div>
                        <button type="submit" className="btn btn-dark" >Zaloguj</button>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => (
    {
        name: state.name.name,
        login: state.name.login
    }
);

export default connect(
    mapStateToProps,
    { login }
)(Login);



