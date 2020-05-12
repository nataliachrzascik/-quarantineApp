import React, { Component } from 'react'
import "./newTask.scss";
import book from "../images/books.jpg"
import good from "../images/good.jpg";
import ticket from "../images/ticket.jpg";
import { NavLink } from "react-router-dom";

import { searchMovie, searchBook, searchGood } from "../actions/searchActions";
import movies from "../../src/items/movies.json";
import books from "../../src/items/books.json";
import goods from "../../src/items/goods.json";
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core"

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

export class NewTask extends Component {
    state = {}
    randomNumber() {
        let number = Math.floor(Math.random() * 90) + 1;
        number += "";
        const chooseMovie = movies.filter(movie => {
            return (movie.position === number)
        })
        return (
            chooseMovie[0].ID
        )
    }
    randomIsbn() {
        let isbn = Math.floor(Math.random() * 50) + 1;
        isbn += "";
        const chooseBook = books.filter(book => {
            return (book.position === isbn)
        })
        return (
            chooseBook[0].ID
        )
    }
    randomGood() {
        let number = Math.floor(Math.random() * 50) + 1;
        number += "";
        const chooseGood = goods.filter(good => {
            return (good.position === number)
        })
        return (
            chooseGood[0].text
        )
    }
    componentDidMount() {
        this.props.searchMovie(this.randomNumber());
        this.props.searchBook(this.randomIsbn());
        this.props.searchGood(this.randomGood());
    }
    render() {
        return (

            <div id="containerMain">
                <div className="col-md-3 col-sm-4 mb-5 d-inline-block">
                    <h2>Książka</h2>
                    <div className="card card-body bg-dark text-center h-100 ">
                        <img className="w-30 mb-2 image" src={book} />
                        {this.props.books.length < 5 ? <NavLink to="/newBook">
                            <StyledButton>
                                Losuj książke</StyledButton></NavLink> : <i className="btn gradientBackground" >Max ilość wylosowanych książek</i>}
                    </div>
                </div>

                <div className="col-md-3 col-sm-4 mb-5 d-inline-block">
                    <h2>Dobry uczynek</h2>
                    <div className="card card-body bg-dark text-center h-100 ">
                        <img className="w-30 mb-2 image" src={good} />
                        {this.props.goods.length < 5 ? <NavLink to="/newGoodTask"><StyledButton>
                            Losuj zadanie
                        </StyledButton></NavLink> : <i className="btn gradientBackground" >Max ilość wylosowanych uczynków</i>}

                    </div>
                </div>

                <div className="col-md-3 col-sm-4 mb-5 d-inline-block">
                    <h2>Film</h2>
                    <div className="card card-body bg-dark text-center h-100">
                        <img className="w-30 mb-2 image" src={ticket} />
                        {this.props.movies.length < 5 ? <NavLink to="/newMovie"><StyledButton>
                            Losuj Film
                        </StyledButton></NavLink> : <i className="btn gradientBackground" >Max ilość wylosowanych filmów</i>}
                    </div>
                </div>
            </div>




        )
    }
}

const mapStateToProps = state => ({
    movie: state.movie.movie,
    book: state.book,
    good: state.good,

    movies: state.name.movies,
    books: state.name.books,
    goods: state.name.goods
});

export default connect(
    mapStateToProps,
    { searchMovie, searchBook, searchGood }
)(NewTask);
