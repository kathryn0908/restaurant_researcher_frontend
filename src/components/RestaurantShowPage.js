import React from 'react'
import AppBar from '../styles/AppBar'
import Restaurant from './Restaurant'


export default function RestaurantShowPage(props){
   
   const displayRestaurant = (id) => { 

        let found = props.restaurants.find(restaurant => restaurant.id == id)
        
            if(found){
                return <Restaurant {...props} key={found.id} restaurant={found} addReview={props.addReview} reviews={props.reviews} addFavorite={props.addFavorite} removeFavorite={props.removeFavorite} addStarRating={props.addStarRating}/>
            }
    }


    return(
        <>
        <div className='showpage-background'>
            <AppBar />
            {displayRestaurant(props.match.params.id)}
        </div>
        </>
    )
}