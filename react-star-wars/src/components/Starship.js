import React from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
import '../Home.css';

const Starship = (params) => {
    console.log(params)
    console.log(params.location.state.ship)
    let shipInfo = params.location.state.ship
    return(
        <>
        <div className="col s12 m6">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <h1>{shipInfo.name}</h1>
                    <h3>Model: {shipInfo.model}</h3>
                    <h3>Manufacturer: {shipInfo.manufacturer}</h3>
                    <h3>Starship Class: {shipInfo.starship_class}</h3>
                </div>
            </div>
            
            <Link className="link"v to='/'>Return to Home Base</Link>
        </div>
        </>
    )
}

export default Starship