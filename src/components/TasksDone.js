import React, { Component } from 'react';
import { connect } from 'react-redux';

export class TaskDone extends Component {
    render() {

        return (
            <div id="containerMain">
                <div className="col">
                    <h5>Zrobione zadania (ostatnie 5)</h5>
                    {this.props.tasks.slice(Math.max(this.props.tasks.length - 5, 0)).map((task) => (
                        <p>{task}</p>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        tasks: state.name.tasksDone
    });
export default connect(mapStateToProps)(TaskDone);