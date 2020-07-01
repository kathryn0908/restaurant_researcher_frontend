import React from 'react'
import AppBar from '../styles/AppBar'
import Restaurant from './Restaurant'




export default function RestaurantShowPage(props){
   
   const displayRestaurant = (id) => { 

        let found = props.restaurants.find(restaurant => restaurant.id == id)
        
            if(found){
                return <Restaurant {...props} restaurant={found} addReview={props.addReview} reviews={props.reviews} />
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