import React from 'react'
import {
    Route,
    Link
} from 'react-router-dom'

const Layout = (props) => {
    return (
        <div>
            <div>Star Wars Starships</div>
            <div>{props.children}</div>
        </div>
    )
}

export default Layout