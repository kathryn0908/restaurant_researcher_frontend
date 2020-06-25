import React from 'react';
import { Link } from 'react-router-dom';

export default function AppBar(){
    return(
        <div className="AppBar">
             <Link to='/trendingrestaurants'>See Full List of Trending Restaurants Here!</Link>

        </div>
    )
}