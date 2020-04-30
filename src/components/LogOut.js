import React from "react";
import { connect } from 'react-redux';
import { logout } from '../actions/loginAction';

class LogOut extends React.Component {
    render() {
        const logOut = () => {
            this.props.logout(undefined);
        }
        logOut();

        return (
            <>
                <div id="containerMain">
                    <h1>Zostałeś wylogowany</h1>
                </div>
            </>
        )

    }
}
const mapStateToProps = state => (
    console.log("Logout.js "),
    console.log(state), {
        name: state.name.name,
        login: state.name.login
    }

);

export default connect(
    mapStateToProps,
    { logout }
)(LogOut);