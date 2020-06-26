import React from 'react';
import { Link } from 'react-router-dom';

export default function AppBar(){
    return(
        <div className="AppBar">
            <Link className='menu' to='/'>Home</Link>
            <Link className='menu' to='/trendingrestaurants'>Trending</Link>
            <Link className='menu' to='/restaurants'>Local Restaurants</Link>
        
        </div>
    )
}