import React from 'react'
import AppBar from '../styles/AppBar'
import OverallStarRating from '../styles/OverallStarRating'
import FavoriteCard from './FavoriteCard'

export default function Profile(props){

    const showUserFavorite = () => {
        let favorites = props.favorites.filter(favorite => localStorage.getItem('id') == favorite.user)

        if (favorites){
            return favorites.map(f => <FavoriteCard favorite={f} removeFavorite={props.removeFavorite} restaurants={props.restaurants}/>)
        }

        else{
            return <p className='subheader-profile'>You have no favorites!</p>
        }
    }
   
    const showUserReview = () => {
       
        let reviews = props.reviews.filter(review => localStorage.getItem('id') == review.user)
        
        
        if(reviews){
            return reviews.map(r=> {
                const handleClick = () => {
                    props.removeReview(r.id)
                }
                
                return (
                    <div className='profile-review-container'>
                     <div className='profile-star-rating'><p className='restaurant-name-profile'>{r.name}</p> <OverallStarRating /></div>
                     <p className='review-profile'>{r.review}</p>
                     <button className='remove-review' reviews={props.reviews} review={r} onClick={handleClick}>Remove</button>
                    </div>
                )
            })
        }
        else if(!reviews) {
           return (
               <div>
                    <p className='subheader-profile'>You have no reviews!</p>
                </div>
           )
        }
    }

    
    return(
        <>
        <AppBar />
        <h1 className='welcome-profile'>Welcome {localStorage.getItem('username')}!</h1>

        <h2 className='header-profile'>Favorites</h2>
        <div className='user-fav-container'>
        {showUserFavorite()}
        </div>
       
       
        <h2 className='header-profile'>Reviews</h2>
        {showUserReview()}
        </>
    )
}