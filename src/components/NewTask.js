import React, { Component } from 'react'
import "./newTask.scss";
import book from "../images/books.jpg"
import good from "../images/good.jpg";
import ticket from "../images/ticket.jpg";
import { NavLink } from "react-router-dom";

export class NewTask extends Component {
    render() {
        return (

            <div id="containerMain">
                <div className="col-md-3 mb-5 d-inline-block">
                    <h2>Książka</h2>
                    <div className="card card-body bg-light text-center h-100 ">
                        <img style={{ height: "30vh" }} className="w-30 mb-2" src={book} />
                        <h5 className="text-light card-title">

                        </h5>
                        <NavLink to="/newBook"><i className="btn gradientBackground" >
                            Losuj książke
                        </i></NavLink>
                    </div>
                </div>

                <div className="col-md-3 mb-5 d-inline-block">
                    <h2>Dobry uczynek</h2>
                    <div className="card card-body bg-light text-center h-100 ">
                        <img style={{ height: "30vh" }} className="w-30 mb-2" src={good} />
                        <h5 className="text-light card-title">

                        </h5>
                        <NavLink to="/newGoodTask"><i className="btn gradientBackground" >
                            Losuj zadanie
                        </i></NavLink>
                    </div>
                </div>

                <div className="col-md-3 mb-5 d-inline-block">
                    <h2>Film</h2>
                    <div className="card card-body bg-light text-center h-100">
                        <img style={{ height: "30vh" }} className="w-30 mb-2" src={ticket} />
                        <h5 className="text-light card-title">

                        </h5>
                        <NavLink to="/newMovie"><i className="btn gradientBackground" >
                            Losuj Film
                        </i></NavLink>
                    </div>
                </div>
            </div>




        )
    }
}

export default NewTask
