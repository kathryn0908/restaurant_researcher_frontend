import React from 'react'
import TrendingCard from '../components/TrendingCard'
import AppBar from '../styles/AppBar'
import SearchBar from '../styles/SearchBar'

export default function TrendingContainer(props){
     
    const displayTrendingRestaurants = props.trending.map(trending => <TrendingCard {...props} trending={trending} key={trending.id} />)

    return(
        <>
        <div className='body-containers'>
            <AppBar />
            <h1 className='header'>Trending Denver Restaurants</h1>
                <SearchBar trending={props.trending} />
                <p className='subheader'>Browse our blogs on local Denver restaurants, updated weekly!</p>
        </div>
        <div>
            <span className='body-containers'/>
        </div>
        <div className='container'>
            {displayTrendingRestaurants}
        </div>
        </>
    )
}