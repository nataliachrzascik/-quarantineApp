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
        return (
            <div id="container">
                <div className="position">
                    <div className="left image1"></div>
                    <div className="right">
                        {movies.map(item => {
                            keyMovie++
                            return (
                                < Task object={item} item={item.Title} text={"Do obejrzenia: "} key={item.Title + keyMovie} id={keyMovie} category={"movie"} />
                            )

                        }
                        )}
                    </div>
                </div>
                <div className="position">
                    <div className="left image2"></div>
                    <div className="right">
                        {books.map(item => {
                            keyBook++
                            return (
                                <Task object={item} item={item.title} text={"Do przeczytania: "} key={item.title + keyBook} id={keyBook} category={"book"} />
                            )
                        })}
                    </div>
                </div>
                <div className="position">
                    <div className="left image3"></div>
                    <div className="right">
                        {goods.map(item => {
                            keyGood++
                            return (
                                <Task object={item} item={item} text={"Do zrobienia: "} key={item + keyGood} id={keyGood} category={"good"} />
                            )
                        })}
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
