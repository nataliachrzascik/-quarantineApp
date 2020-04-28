import React, { Component } from 'react';
import "./task.scss";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import { connect } from 'react-redux';
import { addToDone } from "../actions/addNewTask";

export class Task extends Component {
    clicked = () => {
        this.props.addToDone(this.props.item)
    }
    render() {
        return (
            <div className="oneTask" >
                <div className="taskTitle" >{this.props.text} {this.props.item}</div>
                <div className="VorX"><FaTimes /></div>
                <div className="VorX" key={this.props.id} onClick={this.clicked}><FaCheck /></div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    movies: state.name.movies,
    books: state.name.books,
    goods: state.name.goods
});
export default connect(mapStateToProps, { addToDone })(Task);

