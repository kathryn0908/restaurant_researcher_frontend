import React from 'react'
import AppBar from '../styles/AppBar'

export default function Profile(props){
    const id = localStorage.getItem('restaurant')

    const showRestaurant = (id) => {
        
        let r = props.restaurants.find(restaurant => localStorage.getItem('restaurant') == restaurant.id)
        console.log(r)
        if(r){
            return (
            <div className='restaurant-profile-div'>
                <p className='restaurant-profile-review-name'>{r.name}:</p>
                <p className='restaurant-profile-review'>{localStorage.getItem('reviews')}</p>
            </div>
            )
        }
    }
    
    return(
        <>
        <AppBar />
        <h1>Welcome {localStorage.getItem('user')}!</h1>

        <h2>Favorites</h2>
        <p>you have no favorites!</p>

        <h2>Reviews</h2>
        {
        localStorage.getItem('reviews') !== 'restaurant_researcher_app.Review.None'
            ? showRestaurant(id)
               
            : <p>you have no reviews!</p>
        }
        </>
    )
}