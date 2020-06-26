import React from 'react';
import AppBar from '../styles/AppBar'
import SearchBar from '../styles/SearchBar'




export default function Home(props){
    
    return(
        <div className='body'>
        <AppBar />
        <div className='background'>
             <h1 className='title'>Denver Eats</h1>
             <p className='tagline'>a place to find trending restaurants in the Denver area</p>
             <SearchBar />

        </div>
        </div>
    )
}
