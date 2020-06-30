import React from 'react'
import AppBar from '../styles/AppBar'

export default function Profile(props){
    return(
        <>
        <AppBar />
        <h1>Welcome {localStorage.getItem('username')}!</h1>
        <h2>Favorites</h2>
        <p>you have no favorites!</p>

        <h2>Reviews</h2>
        <p>you have no reviews!</p>
        </>
    )
}