import React, { useState,useEffect } from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
import axios from 'axios'
import '../Home.css';

//import components
import Loader from './common/Loader'
import Starship from './Starship'

const Home = () => {
    //initialize state to be used when fetching repos
    const [data, setData] = useState([])
    //initialize state for loader
    const [loading, setLoading] = useState(true)

    /*
    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/').then((res) => {
        console.log(res.data)  
        console.log(res.data.results)
          setData(res.data.results)
        }).then(() => setLoading(false))
    }, [])
    */

    /*
    useEffect(() => {
        let shipArray = []
        let page = 1
        
        axios.get(`https://swapi.dev/api/starships/?page=${page}`)
        .then((res) => {
            shipArray.push(res.data.results)
            page += 1
            if(res.data.next !== null) {
                console.log('CHAINED PROMISE')
                axios.get(`https://swapi.dev/api/starships/?page=${page}`)
                .then ((res) => {
                    console.log(res.data)
                    shipArray.push(res.data.results)
                    console.log(shipArray)
                    page += 1
                })     
            }
            
            setData(shipArray)  
        })
        .then(() => setLoading(false))

    }, [])
    */
    
   useEffect(()=>{
    let url1 = 'https://swapi.dev/api/starships/'
    let url2 = 'http://swapi.dev/api/starships/?page=2'
    let url3 = 'http://swapi.dev/api/starships/?page=3'
    let url4 = 'http://swapi.dev/api/starships/?page=4'
    const starshipArray = []
    Promise.all([axios.get(url1),axios.get(url2), axios.get(url3), axios.get(url4)])
    .then(responses=>{
        responses.map(response=>starshipArray.push(...response.data.results))
        console.log(starshipArray)
      setData(starshipArray)
    })
    .then(() => setLoading(false))

  },[])

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
                        <Link className="link"
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