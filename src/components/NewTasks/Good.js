import React, { Component } from 'react';
import { connect } from 'react-redux';
import img from "../../images/1.jpg"
import { NavLink } from "react-router-dom";

import { addGood } from "../../actions/addNewTask";

export class Good extends Component {
    componentDidMount() {
        this.props.addGood(this.props.good)
    }

    render() {
        const { good } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 card card-body">
                        <img src={img} className="thumbnail" alt="Poster" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-4">Dobry uczynek</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Zadanie: </strong>{good}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                            <hr />
                            <NavLink to="/newTask"><i to="/" className="btn btn-default text-light">Wróć do panelu użytkownika</i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    good: state.good.good
});

export default connect(mapStateToProps, { addGood })(Good);

