import React from 'react'


export default function TrendingCard(props){
   
    return(
    <div className='card-container'>
        <div className="restaurant-card">
            <h1>{props.trending.title}</h1>
            <img src={props.trending.image_url} alt=""/>
            <p>{props.trending.description}</p>
            <a href={props.trending.url}>Check out more here!</a> 
        </div>
    </div>
    )
}