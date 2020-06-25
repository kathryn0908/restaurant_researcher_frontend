import React from 'react';
import AppBar from '../styles/AppBar'




export default function Home(props){
    
    return(
        <div className='body'>
        <AppBar />
        <div className='background'>
             <h1 className='title'>Denver Eats</h1>
             <p className='tagline'>a place to see trending restaurants in the Denver area</p>
        </div>
        </div>
    )
}
