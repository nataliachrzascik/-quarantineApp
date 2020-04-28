import React, { Component } from 'react';
import tasksToDo from "./tasksToDo.scss";
import Task from "./Task";
import { connect } from 'react-redux';

export class TaskToDo extends Component {
    render() {
        const { movies, books, goods } = this.props;
        let keyMovie = 0;
        let keyBook = 100;
        let keyGood = 200;
        //dokonczyc dla innych tak jak dla movie
        //tylko nie mutując stanu (trzeba zrobic usuwającą akcje po kliknieciu V lub X która
        // zaktualizuje tez globalny stan z movies,goods,books musi byc usuwany stan tego tytułu kliknietego)
        // 2.no i przy przerzucaniu np. z movies mozna tylko 5 zadan pobrac potem blokuje sie przycisk,
        //musi sie usuwac przy zrobieniu lub odrzuceniu zadania nawet z state movies
        return (
            <div id="container">
                <div className="position">
                    <div className="left image1"></div>
                    <div className="right">
                        {movies.map(item => {
                            keyMovie++
                            return (
                                < Task item={item.Title} text={"Do obejrzenia: "} key={item.Title} id={keyMovie} />
                            )

                        }
                        )}
                    </div>
                </div>
                <div className="position">
                    <div className="left image2"></div>
                    <div className="right">
                        {books.map(item => (
                            <Task item={item.title} text={"Do przeczytania: "} key={item.title} />
                        ))}
                    </div>
                </div>
                <div className="position">
                    <div className="left image3"></div>
                    <div className="right">
                        {goods.map(item => (
                            <Task item={item} text={"Do zrobienia: "} key={item} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    movies: state.name.movies,
    books: state.name.books,
    goods: state.name.goods
});
export default connect(mapStateToProps)(TaskToDo);
