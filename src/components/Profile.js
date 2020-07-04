import React from 'react'
import AppBar from '../styles/AppBar'

export default function Profile(props){

    const showUserReview = () => {
       
        let reviews = props.reviews.filter(review => localStorage.getItem('id') == review.user)
        console.log(reviews)
        
        if(reviews){
            return reviews.map(r=> {
                return (
                    <div className='profile-review-container'>
                     <p className='restaurant-name-profile'>{r.name}</p>
                    <p className='review-profile'>{r.review}</p>
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