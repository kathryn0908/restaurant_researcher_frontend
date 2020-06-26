import React from 'react'
import TrendingCard from '../components/TrendingCard'
import AppBar from '../styles/AppBar'
import SearchBar from '../styles/SearchBar'

export default function TrendingContainer(props){
     
    const displayTrendingRestaurants = props.trending.map(trending => <TrendingCard {...props} trending={trending} key={trending.id} />)

    return(
        <>
        <div className='body'>
            <AppBar />
            <h1 className='header'>Trending Denver Restaurants</h1>
            <SearchBar />
        {displayTrendingRestaurants}
        </div>
        </>
    )
}