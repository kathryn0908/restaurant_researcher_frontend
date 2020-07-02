import React from 'react'



export default function RestaurantCard(props){

    const handleClick = () => {
        props.history.push(`/restaurants/${props.restaurant.id}`)
    }

    return(
        <div className="restaurant-card" onClick={handleClick}>
            <h1>{props.restaurant.name}</h1>
            <img className='restaurant-image' src={props.restaurant.thumb} alt='thumbnail'/>
        </div>
    )
}