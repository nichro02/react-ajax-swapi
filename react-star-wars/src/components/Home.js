import React, { useState,useEffect } from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
import axios from 'axios'

//import components
import Loader from './common/Loader'
import Starship from './Starship'

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
                <div key={ship.name} className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{ship.name}</span>
                        </div>
                        <Link 
                            to={{
                            pathname: `/starship/${index}`,
                            state:{ ship }
                            }}
                            key={ship.name}
                        >
                            View Starship information
                        </Link>
                    </div>
                </div>  
            ))
        }
    }

    return(
        <div className="container">
            <div className="row">{display()}</div>
        </div>
    )
}

export default Home