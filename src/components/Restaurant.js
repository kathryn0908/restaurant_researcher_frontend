import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewCard from './ReviewCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Restaurant(props){

    const findReviews = (id) => {
        const foundReview = props.reviews.filter( (review) => {
            return review.restaurant == id;
         })
        return foundReview.map((review) => {
             return <ReviewCard review={review} />
         })
     }

     const showHighlights = () => {
         const highlights = props.restaurant.highlights.split(',')
           return highlights.map(highlight => {
             return  <p className='highlights'><FontAwesomeIcon className='check' icon="check" size='md'/> {highlight}</p>
         })
     }
     console.log(props.restaurant.highlights.split(',')[0])

    return(
        <>
            <div className='name-con'>
            <h1 className='name'>{props.restaurant.name}</h1>
            </div>
            <div className='order-online'>
                {/* <p className='order-link'>{props.restaurant.cuisines}</p> */}
                <a className='order-link' href={props.restaurant.url}>Order Online</a>
            </div>
            <div className='page-styling'>
                    <p className='rest-info'>Hours: {props.restaurant.timings}</p>
                    <p className='rest-info'>Phone number: {props.restaurant.phone_number}</p>
                    <p className='rest-info'>Address: {props.restaurant.address}</p>
                    <p className='rest-info'>Delivery: {props.restaurant.has_online_delivery.toString()}</p>
                    <p className='rest-info'>Average Cost for Two: ${props.restaurant.average_cost_for_two}(approx)</p>
                    <p className='highlights-header'>Highlights</p>
                        <div className='highlights-container'>
                            {showHighlights()}
                        </div>
                <ReviewForm  {...props} addReview={props.addReview} reviews={props.reviews}/>
                <h1 className='review-header'>Reviews</h1>
                <div className='reviews-container'>
                {findReviews(props.match.params.id)} 
                </div>
            </div>
        </>
    )
}