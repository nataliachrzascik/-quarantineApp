import React, { Component } from 'react'

export class Book extends Component {
    state = {

    }
    render() {
        return (
            <div className="container">
                <h3>Book</h3>
                <div className="row">
                    <div className="col-md-4 card card-body">
                        <img className="thumbnail" alt="Poster" />
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4">Title</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Genre:</strong> Genre
                            </li>
                            <li className="list-group-item">
                                <strong>Released:</strong> Released
                            </li>
                            <li className="list-group-item">
                                <strong>Rated:</strong> Rated
                            </li>
                            <li className="list-group-item">
                                <strong>IMDB Rating:</strong> IMDB Ranking
                            </li>
                            <li className="list-group-item">
                                <strong>Writer:</strong> Writer
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                            <h3>About </h3>
                            Plot
                            <hr />
                            <i to="/" className="btn btn-default text-light">
                                Go Back To Search
              </i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Book;

