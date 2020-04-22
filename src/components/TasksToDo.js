import React, { Component } from 'react'
import tasksToDo from "./tasksToDo.scss";

export class TaskToDo extends Component {
    render() {
        //to bedzie sie renderował pojedynczy w .right <Task />
        /*
            <div id="container">
                <div className="all">
                    <div id="movies" className="left "></div>
                    <div className="right">tekst1</div>
                </div>
                <div className="all">
                    <div id="books" className="left "></div>
                    <div className="right">tekst2</div>
                </div>
                <div className="all">
                    <div id="goods" className="left"></div>
                    <div className="right">tekst3</div>
                </div>
            </div>


        */
        return (
            <div id="container">
                <div className="position">
                    <div className="left image1"></div>
                    <div className="right"></div>
                </div>
                <div className="position">
                    <div className="left image2"></div>
                    <div className="right"></div>
                </div>
                <div className="position">
                    <div className="left image3"></div>
                    <div className="right"></div>
                </div>
            </div>
        )
    }
}

export default TaskToDo
