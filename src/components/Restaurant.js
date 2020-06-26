import React from 'react'

export default function Restaurant(props){

    return(
        <>
            <div className='name-con'>
                <h1 className='name'>{props.restaurant.name}</h1>
            </div>
            <div className='page-styling'>
                <p>Hours of Operation: {props.restaurant.timings}</p>
                <p>Phone number: {props.restaurant.phone_number}</p>
                <p>Address: {props.restaurant.address}</p>
                <p>Has Online Delivery: {props.restaurant.has_online_delivery}</p>
                <p>Is Delivering Now: {props.restaurant.is_delivering_now}</p>
                <p>Average Cost for Two: ${props.restaurant.average_cost_for_two}</p>
                <p>Highlights: {props.restaurant.highlights}</p>
                <a href={props.restaurant.url}>Website</a>
            </div>
        </>
    )
}