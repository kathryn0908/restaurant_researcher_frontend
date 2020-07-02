import React from 'react'
import AppBar from '../styles/AppBar'

export default function Profile(props){

    const showUserReview = () => {
        
        let r = props.restaurants.filter(restaurant => localStorage.getItem('restaurants') == restaurant.id)
        console.log(r)
        
        if(r){
          return  r.map(r => {
                return (
                    <div className='restaurant-profile-div'>
                        <p className='restaurant-name-profile'>{r.name}</p>
                        <div className='profile-review-container'>
                        <p className='review-profile'>{localStorage.getItem('reviews')}</p>
                        </div>
                    </div>
                )
            })
        }
    }
    
    return(
        <>
        <AppBar />
        <h1 className='welcome-profile'>Welcome {localStorage.getItem('username')}!</h1>

        <h2 className='header-profile'>Favorites</h2>
        <p className='subheader-profile'>You have no favorites!</p>

        <h2 className='header-profile'>Reviews</h2>
        {
        localStorage.getItem('reviews') !== 'restaurant_researcher_app.Review.None'
            ? showUserReview()
               
            : <p className='subheader-profile'>You have no reviews!</p>
        }
        </>
    )
}