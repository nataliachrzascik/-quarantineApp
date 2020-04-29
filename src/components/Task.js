import React, { Component } from 'react';
import "./task.scss";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import { connect } from 'react-redux';
import { addToDone, deleteTask } from "../actions/addNewTask";
import { addPointMovie, addPointGood, addPointBook } from "../actions/addPoints";

export class Task extends Component {
    clickedYes = () => {
        this.props.addToDone(this.props.item);
        this.props.deleteTask(this.props.item);
        this.props.category === "movie" ? this.props.addPointMovie() :
            (this.props.category === "book" ? this.props.addPointBook() :
                (this.props.category === "good" ? this.props.addPointGood() : console.log("nothing")
                ))
    }
    clickedNo = () => {
        this.props.deleteTask(this.props.item)
    }
    render() {
        return (
            <div className="oneTask" key={this.props.id} >
                <div className="taskTitle" >{this.props.text} {this.props.item}</div>
                <div className="VorX" onClick={this.clickedNo}><FaTimes /></div>
                <div className="VorX" category={this.props.category} onClick={this.clickedYes}><FaCheck /></div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    movies: state.name.movies,
    books: state.name.books,
    goods: state.name.goods
});
export default connect(mapStateToProps, { addToDone, deleteTask, addPointMovie, addPointBook, addPointGood })(Task);

