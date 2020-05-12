import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import { addMovie } from "../../actions/addNewTask";


export class Movie extends Component {
    state = {
    }
    componentDidMount() {
        this.props.addMovie(this.props.movie)
    }

    render() {
        const { movie } = this.props;
        return (
            < div className="container" >
                <h3>Film</h3>
                <div className="row">
                    <div className="col-md-4 card card-body">
                        <img src={movie.Poster} className="thumbnail" alt="Poster" />
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4">{movie.Title}</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Gatunek: </strong>{movie.Genre}
                            </li>
                            <li className="list-group-item">
                                <strong>Wydany: </strong>{movie.Released}
                            </li>
                            <li className="list-group-item">
                                <strong>Kraj Produkcji: </strong>{movie.Country}
                            </li>
                            <li className="list-group-item">
                                <strong>Czas Trwania: </strong>{movie.Runtime}
                            </li>
                            <li className="list-group-item">
                                <strong>Nagrody: </strong>{movie.Awards ? movie.Awards : "none"}
                            </li>
                            <li className="list-group-item">
                                <strong>Oceny: </strong>
                                {movie.Ratings.map(rating => {
                                    return (
                                        `${rating.Source} : ${rating.Value} `
                                    )
                                })}
                            </li>
                            <li className="list-group-item">
                                <strong>Reżyser: </strong>{movie.Director}
                            </li>
                            <li className="list-group-item">
                                <strong>Scenarzysta: </strong>{movie.Writer}
                            </li>
                            <li className="list-group-item">
                                <strong>Aktorzy: </strong>{movie.Actors}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                            <h3>Wątki </h3>
                            {movie.Plot}
                            <hr />
                            <NavLink to="/newTask"><i to="/" className="btn btn-default text-light">Wróć do panelu użytkownika</i></NavLink>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie.movie
});

export default connect(mapStateToProps, { addMovie })(Movie);

