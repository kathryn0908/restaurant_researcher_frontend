import React from 'react';
import { Link } from 'react-router-dom';

export default function AppBar(){
    return(
        <div className="AppBar">
            <Link className='menu' to='/'>Home</Link>
            <Link className='menu' to='/trendingrestaurants'>Trending</Link>
            <Link className='menu' to='/restaurants'>Local Restaurants</Link>
            <Link className='menu' to='/login'>Login</Link>
            <Link className='menu' to='/profile'><img src='/Users/katie/Capstone/restaurant_frontend/restaurant_researcher_frontend/src/styles/profile.png' alt='My Profile'/></Link>
        
        </div>
    )
}