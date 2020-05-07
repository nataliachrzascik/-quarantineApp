import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import { addBook } from "../../actions/addNewTask";

export class Book extends Component {
    state = {

    }
    componentDidMount() {
        this.props.addBook(this.props.book.volumeInfo)
    }
    render() {
        const { book } = this.props
        return (
            <div className="container">
                {console.log(book)}
                <h3>Książka</h3>
                <div className="row">
                    <div className="col-md-2 col-sm-7 card card-body">
                        <img src={book.volumeInfo.imageLinks.thumbnail} className="thumbnail" alt="Poster" />
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4">{book.volumeInfo.title}</h2>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Gatunek: </strong>{book.volumeInfo.categories}
                            </li>
                            <li className="list-group-item">
                                <strong>Opublikowano: </strong>{book.volumeInfo.publishedDate}
                            </li>
                            <li className="list-group-item">
                                <strong>Liczba Stron: </strong>{book.volumeInfo.pageCount}
                            </li>
                            <li className="list-group-item">
                                <strong>Autor: </strong> {book.volumeInfo.authors}
                            </li>
                            <li className="list-group-item">
                                <strong>Wydawnictwo: </strong> {book.volumeInfo.publisher}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                            <h3>Opis</h3>
                            {book.volumeInfo.description}
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
    book: state.book.book.items[0]
});

export default connect(mapStateToProps, { addBook })(Book);

