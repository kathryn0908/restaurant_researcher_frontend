import React from 'react'
import ImageWrapper from '../styles/ImageWrapper'



export default function RestaurantCard(props){

    const handleClick = () => {
        props.history.push(`/restaurants/${props.restaurant.id}`)
    }

    return(
        <div className='search-card' onClick={handleClick}>
            <ImageWrapper restaurant={props.restaurant} ratings={props.ratings}/>
        </div>
    )
}