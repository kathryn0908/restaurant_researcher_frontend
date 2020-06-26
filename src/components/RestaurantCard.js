import React from 'react'



export default function RestaurantCard(props){
    // const {name, thumb, cuisines, id} = props

    const handleClick = () => {
        props.history.push(`/restaurants/${props.restaurant.id}`)
    }

    return(
    <div className='card-container'>
        <div className="restaurant-card" onClick={handleClick}>
            <h1>{props.restaurant.name}</h1>
            <img src={props.restaurant.thumb} alt='thumbnail'/>
            <p>{props.restaurant.cuisines}</p>
        </div>
    </div>
    )
}