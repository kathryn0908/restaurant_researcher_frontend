import React from 'react'
import RestaurantCard from '../components/RestaurantCard'
import AppBar from '../styles/AppBar'
import SearchBar from '../styles/SearchBar'



export default function RestaurantContainer(props){
     
    const displayRestaurants = props.restaurants.map(restaurant => <RestaurantCard {...props} restaurant={restaurant} key={restaurant.id} />)

    return(
        <>
        <div className='body'>
            <AppBar />
            <h1 className='header'>Local Denver Restaurants</h1>
            <SearchBar />
        {displayRestaurants}
        </div>
        </>
    )
}