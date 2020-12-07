import React from 'react'
import '../../Layout.css';
import {
    Route,
    Link
} from 'react-router-dom'



const Layout = (props) => {
    return (
        <div>
            <div id="layoutHeader">
                <h1>Star Wars Starships</h1>
            </div>
            <div>{props.children}</div>
        </div>
    )
}

export default Layout