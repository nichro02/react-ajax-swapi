import React, { useState,useEffect } from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
import axios from 'axios'

//import components
import Loader from './common/Loader'

const Home = () => {
    //initialize state to be used when fetching repos
    const [data, setData] = useState([])
    //initialize state for loader
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/').then((res) => {
          console.log(res.data.results)
          setData(res.data.results)
        }).then(() => setLoading(false))
    }, [])

    const display = () => {
        if(loading) {
            return <Loader />
        } else {
            return data.map((ship, index) => (
                <div key={ship.index} className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{ship.name}</span>
                        </div>
                    </div>
                </div>  
            ))
        }
    }

    return(
        <div className="container">
            <h1>Home Base</h1>
            <div className="row">{display()}</div>
        </div>
    )
}

export default Home