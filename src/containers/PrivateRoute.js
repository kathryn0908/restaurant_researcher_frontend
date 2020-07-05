import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Profile from '../components/Profile'


export default function PrivateRoute(props){

    return(
        localStorage.token 
        ? <Route {...props} render={(routerProps) => (
            <Profile {...routerProps} users={props.users} addNewUser={props.addNewUser} favorites={props.favorites} reviews={props.reviews} removeFavorite={props.removeFavorite} removeReview={props.removeReview} restaurants={props.restaurants}/>
        )}/>
        : <Redirect to='/login' />
    )

}