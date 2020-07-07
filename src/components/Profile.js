import React from 'react'
import AppBar from '../styles/AppBar'
import FavoriteCard from './FavoriteCard'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function Profile(props){

    const showUserFavorite = () => {
        let favorites = props.favorites.filter(favorite => localStorage.getItem('id') == favorite.user)

        if (favorites){
            return favorites.map(f => <FavoriteCard {...props} favorite={f} removeFavorite={props.removeFavorite} restaurants={props.restaurants}/>)
        }

        else if(favorites.length == 0){
            return <p className='subheader-profile'>You have no favorites!</p>
        }
    }
   
    const showUserReview = () => {
       
        let reviews = props.reviews.filter(review => localStorage.getItem('id') == review.user)
        const sortReviews = reviews.reverse();
        
        if(sortReviews){
            return sortReviews.map(r=> {
                const handleClick = () => {
                    props.removeReview(r.id)
                }
                
                return (
                    <div className='profile-review-container'>
                     <div className='profile-star-rating'><p className='restaurant-name-profile'>{r.name}</p> <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                        name="rating"
                        value={r.rating} 
                    />
                    </Box>
                    <p className='profile-date'>{r.created_at.slice(0,10)}</p></div> 
                     <p className='review-profile'>{r.review}</p>
                     <button className='remove-review' reviews={props.reviews} review={r} onClick={handleClick}>Remove</button>
                    </div>
                )
            })
        }
        else if(sortReviews.length == 0) {
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