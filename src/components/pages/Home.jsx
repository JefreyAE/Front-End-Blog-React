import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {

    return(
        <div className="jumbo">
            <h1>Wellcome to my blog</h1>
            <p>Blog developed using MERN Stack (Mongo, Express, React and NodeJs)</p>
            <Link to="articles" className="button">See the articles</Link>
        </div>
    )
}