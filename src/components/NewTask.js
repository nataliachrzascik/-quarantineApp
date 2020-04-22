import React, { Component } from 'react'
import "./newTask.scss";
import book from "../images/books.jpg"
import good from "../images/good.jpg";
import ticket from "../images/ticket.jpg";
import { NavLink } from "react-router-dom";

import { searchMovie } from "../actions/searchActions";
import movies from "../../src/items/movies.json";
import { connect } from 'react-redux';

export class NewTask extends Component {
    state = {}
    randomNumber() {
        let number = Math.floor(Math.random() * 90) + 1;
        number += "";
        const chooseMovie = movies.filter(movie => {
            return (movie.position === number)
        })
        return chooseMovie[0].ID;
    }
    componentDidMount() {
        this.props.searchMovie(this.randomNumber());
    }
    render() {
        return (

            <div id="containerMain">
                <div className="col-md-3 mb-5 d-inline-block">
                    <h2>Książka</h2>
                    <div className="card card-body bg-light text-center h-100 ">
                        <img style={{ height: "30vh" }} className="w-30 mb-2" src={book} />
                        <h5 className="text-light card-title">

                        </h5>
                        <NavLink to="/newBook"><i className="btn gradientBackground" >
                            Losuj książke
                        </i></NavLink>
                    </div>
                </div>

                <div className="col-md-3 mb-5 d-inline-block">
                    <h2>Dobry uczynek</h2>
                    <div className="card card-body bg-light text-center h-100 ">
                        <img style={{ height: "30vh" }} className="w-30 mb-2" src={good} />
                        <h5 className="text-light card-title">

                        </h5>
                        <NavLink to="/newGoodTask"><i className="btn gradientBackground" >
                            Losuj zadanie
                        </i></NavLink>
                    </div>
                </div>

                <div className="col-md-3 mb-5 d-inline-block">
                    <h2>Film</h2>
                    <div className="card card-body bg-light text-center h-100">
                        <img style={{ height: "30vh" }} className="w-30 mb-2" src={ticket} />
                        <h5 className="text-light card-title">

                        </h5>
                        <NavLink to="/newMovie"><i className="btn gradientBackground" >
                            Losuj Film
                        </i></NavLink>
                    </div>
                </div>
            </div>




        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie.movie
});

export default connect(
    mapStateToProps,
    { searchMovie }
)(NewTask);
