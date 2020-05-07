import React, { Component } from 'react';
import "./login.scss";

import { login } from '../actions/loginAction';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import { Button, TextField } from "@material-ui/core";

const StyledButton = withStyles({
    root: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginRight: '5%',
        boxShadow: '0 1px 3px 2px rgba(195, 192, 192, .1)',
        backgroundColor: "#515151"
    },
    label: {
        textTransform: 'capitalize',
    },

})(Button);

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
        //" ",
        const logOk = () => {
            //czy w bazie jest taki login? jesli tak to pobierz go dane
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
            this.props.history.push('/loginSuccess');
        }

        if (this.state.tempName === undefined || null) {
            return alert("Nazwa nie moze byc pusta");
        }
        else {
            const reg = new RegExp("[a-zA-Z_0-9]+");
            //czy w bazie jest taki login? jesli tak to pobierz go dane
            //jesli w bazie nie ma takiego loginu to wykonaj logOK
            reg.test(this.state.tempName) ? logOk() : alert("Nazwa musi składać się z liter, cyfr lub znaku _")
        }
    }
    render() {
        return (
            <div id="containerMain">
                <div className="background p-5 radius col-md-6 m-auto">
                    <p className="userName">TWOJA NAZWA UZYTKOWNIKA</p>
                    <form onSubmit={this.LogMe}>
                        <div className="form-group m-2 p-4">
                            <TextField style={{ height: '100%' }} label="Nick" variant="outlined" onChange={this.onChange} className="form-control" id="inputNick" ></TextField>
                        </div>
                        <StyledButton type="sumbit">Zaloguj</StyledButton>
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



