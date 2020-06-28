import React from 'react'


export default function TrendingCard(props){
   
    return(
        <div className="trending-card">
            <h1>{props.trending.title}</h1>
            <a className='trending-image' href={props.trending.url}><img  className='trending-image' src={props.trending.image_url} alt=""/></a>
            <p>{props.trending.description}</p>
        </div>
    )
}