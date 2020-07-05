import React from 'react'



export default function FavoriteCard(props){

    const handleClick = () => {
        props.removeFavorite(props.favorite.id)
    }
    const restaurantInfo = () =>{
       let r = props.restaurants.filter(restaurant => restaurant.id == props.favorite.restaurant)
      return r.map(r => {
           return(
            <div className="favorite-card" onClick={handleClick}>
            <h1 className='favorite-name'>{r.name}</h1>
            <img className='restaurant-image' src={r.thumb} alt='thumbnail'/>
            </div>

       )})
    }
    console.log(props)
    return(
        <>
       {restaurantInfo()}
       </>
    )
}